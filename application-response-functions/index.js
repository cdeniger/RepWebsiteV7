/* eslint-disable max-len */
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {logger} = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.onApplicationCreate = onDocumentCreated({
  document: "applications/{applicationId}",
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
  const applicationData = snap.data();
  if (!applicationData) {
    logger.error("applicationData is undefined or null.");
    return;
  }

  const firstName = applicationData.fullName ? applicationData.fullName.split(" ")[0] : "there";

  // --- Email to the User ---
  const userMailOptions = {
    from: `"Rep. Career Management" <${trimmedEmailUser}>`,
    to: applicationData.email,
    subject: "Your Application has been Received",
    html: `
      <html>
        <body>
          <p>Hi ${firstName},</p>
          <p>Thank you for submitting your application to Rep. We have received it and will be reviewing your information shortly.</p>
          <p>Our team is dedicated to finding the best-fit candidates, and we appreciate your patience as we give your profile the attention it deserves.</p>
          <p>We will be in touch with the next steps. In the meantime, feel free to explore our <a href="https://firebasestudio-rep-site-v2-1.web.app/process">process</a> to learn more about how we work.</p>
          <br/>
          <p>
            Best,<br/>
            The Rep. Team
          </p>
        </body>
      </html>
    `,
  };

  // --- Email to the Rep. Team ---
  const teamMailOptions = {
    from: `"Firebase Notifier" <${trimmedEmailUser}>`,
    to: "cdeniger@icloud.com", // Your team's notification email address
    subject: `New Application Received: ${applicationData.fullName}`,
    html: `
      <html>
        <body style="font-family: sans-serif; line-height: 1.6;">
          <h1 style="color: #1D242E;">New Application: ${applicationData.fullName}</h1>

          <h2 style="color: #C95B32; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Section A: The Dossier</h2>
          <p><strong>Full Name:</strong> ${applicationData.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${applicationData.email}">${applicationData.email}</a></p>
          <p><strong>LinkedIn:</strong> <a href="${applicationData.linkedinUrl}">${applicationData.linkedinUrl}</a></p>
          <p><strong>Resume:</strong> <a href="${applicationData.resume}">View Resume</a></p>

          <h2 style="color: #C95B32; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Section B: The Gate</h2>
          <p><strong>Work Authorization:</strong> ${applicationData.workAuth}</p>
          <p><strong>Experience Level:</strong> ${applicationData.experience}</p>

          <h2 style="color: #C95B32; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Section C: The Value Matrix</h2>
          <p><strong>Current Salary:</strong> ${applicationData.currentSalary}</p>
          <p><strong>Target Compensation:</strong> ${applicationData.targetComp}</p>

          <h2 style="color: #C95B32; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Section D: The Velocity Matrix</h2>
          <p><strong>Employment Status:</strong> ${applicationData.employmentStatus}</p>
          <p><strong>Pipeline Velocity:</strong> ${applicationData.pipelineVelocity}</p>
          <p><strong>Primary Motivation:</strong> ${applicationData.primaryMotivation}</p>
        </body>
      </html>
    `,
  };

  try {
    const userEmailInfo = await transporter.sendMail(userMailOptions);
    logger.log("User confirmation email sent:", JSON.stringify(userEmailInfo, null, 2));
    const teamEmailInfo = await transporter.sendMail(teamMailOptions);
    logger.log("Team notification email sent:", JSON.stringify(teamEmailInfo, null, 2));
  } catch (error) {
    logger.error("Fatal Error sending emails:", error);
    if (error.code === "EAUTH") {
      logger.error("Authentication failed. Please check your EMAIL_USER and EMAIL_PASS secrets.");
    }
    throw new Error(`Failed to send email: ${error.message}`);
  }
});
