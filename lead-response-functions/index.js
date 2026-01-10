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
      emailSubject = "Regarding your diagnostic: Stopping the burnout";
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>We’ve analyzed your diagnostic inputs. You mentioned that you are currently <strong>Actively Interviewing.</strong></p>
        <p>In today’s market, "active" often feels like a second full-time job where you get very little return on your time. You spend hours scanning boards and customizing resumes, only to face automated rejection. When a single role receives 2,000 applications in 3 hours, the hiring process becomes a lottery, not a selection.</p>
        <p>It is easy to feel like you are running on a hamster wheel—exhausted, isolated, and getting no feedback on why you weren't selected.</p>
        <p><strong>Your Diagnostic Verdict:</strong> Based on your inputs, your profile maps to the <strong>${archetype}</strong> archetype.</p>
        <p><strong>The Diagnosis:</strong> ${diagnosis}</p>
        <p><strong>Why You Might Be Stalling:</strong> Without a counter-strategy, this profile often gets stuck in the automated loop, leading to:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
          ${riskFactors.length > 2 ? `<li>${riskFactors[2]}</li>` : ""}
        </ul>
        <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
        <p><strong>How Rep. Changes the Process:</strong> We believe you shouldn't have to navigate this alone. We act as your representation, taking over the heavy lifting of the search.</p>
        <p>Crucially, we don't just manage your current pipeline—we improve it. We actively source both public roles and unlisted opportunities you can’t find on your own. This ensures you have higher-quality options to choose from, allowing you to stop scanning job boards and start having actual conversations with hiring managers.</p>
        <p>Because we operate on a success fee model, our incentives are aligned. We don't win unless you land the role you deserve.</p>
        <p><strong>Next Step:</strong> Let’s audit your current pipeline and see where we can add better opportunities.</p>
      `;
      break;

    case "In transition / recently left":
      emailSubject = `Your Diagnostic Results: ${archetype}`;
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>We received your diagnostic inputs. You mentioned you are currently <strong>In Transition.</strong></p>
        <p>The hardest part of this phase is usually the isolation. Without a sounding board, the silence of the application process can start to erode your confidence. Rep. helps you signal to the market that you are a professional managing a strategic search, not just someone looking for a lifeline.</p>
        <p><strong>The Diagnosis:</strong> Based on this snapshot, your profile maps to <strong>${archetype}</strong>. This suggests you may be facing: ${diagnosis}</p>
        <p><strong>Why The Market Might Be Stalling:</strong> We often see profiles like yours encounter specific friction points, such as:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
        </ul>
        <p><strong>A Potential Path Forward:</strong> ${aiVerdict}</p>
        <p><strong>Where We Should Look:</strong> Based on your initial answers, it may be more effective to pivot your search toward ${opportunityTypes.length > 0 ? opportunityTypes[0] : "new opportunities"} and ${opportunityTypes.length > 1 ? opportunityTypes[1] : "different roles"}.</p>
        <p>However, a short diagnostic can only tell us so much. I’d like to discuss your background in more detail to confirm if these leverage points are the right ones for you.</p>
        <p><strong>Next Step:</strong> Let’s review your results and build a concrete plan for your re-entry.</p>
      `;
      break;

    case "Employed, not actively looking":
    case "Employed, passively exploring":
      emailSubject = `Market Map: ${archetype} Opportunities`;
      emailBody = `
        <p>Hi ${firstName},</p>
        <p>We received your diagnostic inputs. You indicated you are <strong>Passively Exploring.</strong></p>
        <p>This is the strongest negotiating position you can be in. You don't need a job; you need an upgrade. However, the best roles for your profile—specifically ${opportunityTypes.length > 0 ? opportunityTypes[0] : "high-value roles"}—rarely appear on public job boards. They are often unlisted or filled through networks.</p>
        <p><strong>The Diagnosis:</strong> Your current profile is <strong>${archetype}</strong>. The core dynamic here is: ${diagnosis}</p>
        <p><strong>The Trap to Avoid:</strong> While comfortable, staying in your current seat too long with this profile creates risks:</p>
        <ul>
          ${riskFactors.length > 0 ? `<li>${riskFactors[0]}</li>` : ""}
          ${riskFactors.length > 1 ? `<li>${riskFactors[1]}</li>` : ""}
        </ul>
        <p><strong>The Strategic Fix:</strong> ${aiVerdict}</p>
        <p><strong>How Rep. Helps:</strong> We don't spam your resume. We map the market confidentially to identify roles that fit your specific archetype, allowing you to explore opportunities without alerting your current employer.</p>
        <p><strong>Next Step:</strong> Let’s look at the market data and see if a move is mathematically worth your time right now.</p>
      `;
      break;

    case "Considering a change in the next year":
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
          <a href="https://calendly.com/patrick-repteam/30min">Schedule a Call</a>
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
