/* eslint-disable max-len */
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {logger} = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.onLeadCreate = onDocumentCreated({
  document: "leads/{leadId}",
  secrets: ["EMAIL_USER", "EMAIL_PASS"],
}, async (event) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    logger.error("Email credentials are not set. Check secret configuration.");
    return;
  }

  const trimmedEmailUser = emailUser.trim();

  const transporter = nodemailer.createTransport({
    service: "iCloud",
    auth: {
      user: trimmedEmailUser,
      pass: emailPass,
    },
  });

  const snap = event.data;
  if (!snap) {
    logger.log("No data associated with the event");
    return;
  }
  const leadData = snap.data();
  if (!leadData) {
    logger.error("leadData is undefined or null.");
    return;
  }

  const firstName = leadData.fullName ? leadData.fullName.split(" ")[0] : "there";

  // Safely access nested properties
  const currentStatus = (leadData.answers && leadData.answers.current_status) ? leadData.answers.current_status : null;
  const careerStage = (leadData.answers && leadData.answers.career_stage) ? leadData.answers.career_stage : null;
  const riskFactors = leadData.riskFactors || [];
  const opportunityTypes = leadData.opportunityTypes || [];
  const archetype = leadData.archetype || "Not Specified";
  const diagnosis = leadData.diagnosis || "Not Specified";
  const aiVerdict = leadData.aiVerdict || "No verdict available.";


  let emailSubject;
  let emailBody;

  // Logic to choose email template based on lead status
  switch (currentStatus) {
    case "Actively interviewing":
      emailSubject = "Stopping the burnout / Recharge your search";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>I’m Patrick with Rep. Thanks for completing our diagnostic.</p>
        <p>Since you mentioned you are Actively Interviewing, I wanted to get these results to you immediately. I know the "active" search often feels like a second full-time job—scanning boards, customizing resumes, and facing the automated "black hole" of rejection.</p>
        <p><strong>The System Verdict:</strong> Based on your inputs, our diagnostic maps you to the <strong>${archetype}</strong> archetype.</p>
        <p><strong>What this means:</strong> ${diagnosis}</p>
        <p><strong>Why you might be stalling:</strong> Without a counter-strategy, profiles like yours often get stuck in the automated loop due to:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
          ${riskFactors.length > 2 ? `<li>${riskFactors[2]}</li>` : ""}
        </ul>
        <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
        <p><strong>How we help:</strong> My goal at Rep is to take the heavy lifting off your plate so you can stop scanning job boards and start having actual conversations. We also improve your pipeline by sourcing unlisted opportunities you can’t find on your own.</p>
        <p><strong>Next Step:</strong> I’d love to hop on a brief call to unpack these results and see how we can upgrade your current pipeline.</p>
      `;
      break;

    case "In transition / recently left":
      emailSubject = "You aren't doing this alone.";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>I’m Patrick with Rep. Thanks for completing the audit.</p>
        <p>I noticed you mentioned you are currently <strong>In Transition</strong>. That phase can be incredibly isolating, and without a sounding board, the silence of the application process is tough. I wanted to share this feedback quickly because it highlights exactly why you might be facing friction.</p>
        <p><strong>The System Verdict:</strong> Based on this snapshot, you fit the <strong>${archetype}</strong> profile.</p>
        <p><strong>The Friction Points:</strong> This suggests the market may be misinterpreting your value due to:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
        </ul>
        <p><strong>A potential path forward:</strong> ${aiVerdict}</p>
        <p><strong>Where to look:</strong> Based on your initial answers, we can help you identify the types of roles and companies that best align with your profile and have the greatest impact.</p>
        <p><strong>Next Step:</strong> A short quiz can only tell us so much. I’d really like to hop on a call to learn more about your background and see if these are the right leverage points for you.</p>
      `;
      break;

    case "Employed, passively exploring":
      emailSubject = "Here's the data";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>I’m Patrick with Rep. Thanks for completing the audit.</p>
        <p>You mentioned you are Passively Exploring, which is the strongest negotiating position you can be in. However, the most strategic roles for your profile—the ones that represent a true upgrade—are rarely found on public job boards.</p>
        <p>I wanted to send over your profile assessment so you can see how the market likely views your positioning right now, recognizing this is based just on your snapshot.</p>
        <p><strong>The System Verdict:</strong> Your current profile maps to <strong>${archetype}</strong>. The core dynamic here is: ${diagnosis}</p>
        <p><strong>The trap to avoid:</strong> While comfortable, staying in your current seat too long with this profile creates risks:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
        </ul>
        <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
        <p><strong>Next Step:</strong> We help clients explore the market confidentially to identify roles that fit this specific archetype. I’d love to hop on a call to walk you through the market data and see if a move is worth your time right now.</p>
      `;
      break;

    case "Employed, not actively looking":
    case "Considering a change in the next year":
      emailSubject = "Career Strategy: What comes next";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>I’m Patrick with Rep. Thanks for completing the audit.</p>
        <p>I saw you are looking ahead, which is great. By starting now, we can build a plan rather than just reacting to job postings later. I wanted to send over this baseline assessment to help you start that planning process.</p>
        <p><strong>The System Verdict:</strong> Your baseline profile is <strong>${archetype}</strong>. ${diagnosis}</p>
        <p><strong>What to build toward:</strong> To maximize your options next year, the data suggests positioning yourself specifically for:</p>
        <ul>
          ${opportunityTypes.length > 0 ? `<li>${opportunityTypes[0]}</li>` : ""}
          ${opportunityTypes.length > 1 ? `<li>${opportunityTypes[1]}</li>` : ""}
          ${opportunityTypes.length > 2 ? `<li>${opportunityTypes[2]}</li>` : ""}
        </ul>
        <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
        <p><strong>Next Step:</strong> I’d really like to hop on a call to learn more about your goals and talk about opportunities that might impact your near or medium term timing.</p>
      `;
      break;

    default:
      // Fallback to the original generic email
      emailSubject = "Your Diagnostic Results";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>Thank you for completing our quick-look Career Diagnostic. Here are your results:</p>
        <p><strong>Archetype:</strong> ${archetype}</p>
        <p>While this snapshot cannot fully capture all the variables in your specific situation, based on our clients' historical searches we can draw some quick conclusions. ${aiVerdict}</p>
        <p>To determine if we can be helpful we would love to discuss your search, ambitions and frustrations.</p>
      `;
      break;
  }

  // Added special case for "Early career" as requested
  if (careerStage === "Early career" && currentStatus !== "Actively interviewing" && currentStatus !== "In transition / recently left") {
    emailSubject = `Career Strategy: The ${archetype} Path`;
    emailBody = `
      <p>Hi ${firstName},</p>
      <p>We received your diagnostic inputs. You mentioned you are looking ahead.</p>
      <p>Most professionals wait until they are frustrated to build a strategy. By starting now, you allow yourself to build a plan rather than just reacting to job postings. This is how you set up a significant step up rather than a lateral move.</p>
      <p><strong>The Diagnosis:</strong> Your baseline profile is <strong>${archetype}</strong>. ${diagnosis}</p>
      <p><strong>What to Build Toward:</strong> To maximize your options next year, we need to position you specifically for:</p>
      <ul>
          ${opportunityTypes.length > 0 ? `<li>${opportunityTypes[0]}</li>` : ""}
          ${opportunityTypes.length > 1 ? `<li>${opportunityTypes[1]}</li>` : ""}
          ${opportunityTypes.length > 2 ? `<li>${opportunityTypes[2]}</li>` : ""}
      </ul>
      <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
      <p><strong>Next Step:</strong> Let’s define the plan for your next 3–5 years.</p>
    `;
  }

  const userFromAddress = `"Rep. Career Management" <${trimmedEmailUser}>`;
  const teamFromAddress = `"Firebase Notifier" <${trimmedEmailUser}>`;

  const userMailOptions = {
    from: userFromAddress,
    to: leadData.email,
    subject: emailSubject,
    html: `
      <html>
        <body>
          ${emailBody}
          <p>Schedule a call here:</p>
          <a href="https://calendly.com/patrick-repteam/30min">Chat with Patrick</a>
          <br/><br/>
          <p>
            Best,<br/>
            Patrick
            <br/><br/>
            Patrick Deniger<br/>
            Rep. | Professionally Represented<br/>
            +1 (972) 322-0837
          </p>
        </body>
      </html>
    `,
  };

  const teamMailOptions = {
    from: teamFromAddress,
    to: "cdeniger@icloud.com",
    subject: "New Diagnostic Lead",
    html: `
      <h1>A new lead has been submitted:</h1>
      <p><strong>Name:</strong> ${leadData.fullName}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Phone:</strong> ${leadData.phone}</p>
      <p><strong>Current Status:</strong> ${currentStatus}</p>
      <p><strong>Career Stage:</strong> ${careerStage}</p>
      <p><strong>Archetype:</strong> ${archetype}</p>
    `,
  };

  try {
    const userEmailInfo = await transporter.sendMail(userMailOptions);
    logger.log("User email response:", JSON.stringify(userEmailInfo, null, 2));
    const teamEmailInfo = await transporter.sendMail(teamMailOptions);
    logger.log("Team notification email response:", JSON.stringify(teamEmailInfo, null, 2));
  } catch (error) {
    logger.error("Fatal Error sending emails:", error);
    if (error.code === "EAUTH") {
      logger.error("Authentication failed. Please check your EMAIL_USER and EMAIL_PASS secrets.");
    }
    throw new Error(`Failed to send email: ${error.message}`);
  }
});
