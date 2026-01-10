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
  // Securely using secrets and ensuring the 'from' address matches the authenticated user.
  const transporter = nodemailer.createTransport({
    service: "iCloud",
    auth: {
      user: process.env.EMAIL_USER, // Secret loaded at runtime
      pass: process.env.EMAIL_PASS, // Secret loaded at runtime
    },
  });

  const snap = event.data;
  if (!snap) {
    logger.log("No data associated with the event");
    return;
  }
  const leadData = snap.data();

  // Extract the first name from the full name
  const firstName = leadData.fullName.split(" ")[0];

  // The 'from' address must exactly match the authenticated user (EMAIL_USER secret)
  const userFromAddress = `"Rep. Career Management" <${process.env.EMAIL_USER}>`;
  const teamFromAddress = `"Firebase Notifier" <${process.env.EMAIL_USER}>`;

  const userMailOptions = {
    from: userFromAddress,
    to: leadData.email,
    subject: "Your Diagnostic Results",
    html: `
      <h1>Hi ${firstName},</h1>
      <p>Thank you for completing our quick-look Career Diagnostic. Here are your results:</p>
      <p><strong>Archetype:</strong> ${leadData.archetype}</p>
      <p>While this snapshot cannot fully capture all the variables in your specific situation, based on our 
      clients' historical searches we can draw some quick conclusions. ${leadData.aiVerdict}</p>
      <p>To determine if we can be helpful we would love to discuss your search, ambitions and frustrations. Schedule a call here:</p>
      <a href="https://calendly.com/patrick-repteam/30min">Schedule a Call</a>
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
      <p><strong>Current Status:</strong> ${leadData.answers.current_status}</p>
      <p><strong>Career Stage:</strong> ${leadData.answers.career_stage}</p>
      <p><strong>Archetype:</strong> ${leadData.archetype}</p>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);
    logger.log(`User email sent to: ${leadData.email}`);
    await transporter.sendMail(teamMailOptions);
    logger.log("Team notification email sent.");
  } catch (error) {
    logger.error("Fatal Error sending emails:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
});
