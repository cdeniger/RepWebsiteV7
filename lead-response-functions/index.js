/* eslint-disable max-len */
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {logger} = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtp.mail.me.com",
  port: 587,
  secure: false,
  auth: {
    user: "cdeniger@icloud.com",
    pass: "layt-pmyp-dqjb-txte",
  },
});

exports.onLeadCreate = onDocumentCreated("leads/{leadId}", async (event) => {
  const snap = event.data;
  if (!snap) {
    logger.log("No data associated with the event");
    return;
  }
  const leadData = snap.data();

  // Email to the user
  const userMailOptions = {
    from: `"Rep. Career Management" <cdeniger@icloud.com>`,
    to: leadData.email,
    subject: "Your Diagnostic Results",
    html: `
      <h1>Hello ${leadData.name},</h1>
      <p>Thank you for completing our diagnostic tool. Here are your results:</p>
      <p><strong>Archetype:</strong> ${leadData.archetype}</p>
      <p>We would love to discuss your results. Schedule a call here:</p>
      <a href="https://your-scheduling-link.com">Schedule a Call</a>
    `,
  };

  // Notification email to the team
  const teamMailOptions = {
    from: `"Firebase Notifier" <cdeniger@icloud.com>`,
    to: "cdeniger@icloud.com",
    subject: "New Diagnostic Lead",
    html: `
      <h1>A new lead has been submitted:</h1>
      <p><strong>Name:</strong> ${leadData.name}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Archetype:</strong> ${leadData.archetype}</p>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);
    logger.log("User email sent to:", leadData.email);
    await transporter.sendMail(teamMailOptions);
    logger.log("Team notification email sent.");
  } catch (error) {
    logger.error("Error sending emails:", error);
  }
});
