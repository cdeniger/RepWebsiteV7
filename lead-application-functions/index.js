const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const { calculateScore, getTier } = require("./scoring");

admin.initializeApp();

exports.onApplicationCreate = onDocumentCreated("applications/{applicationId}", async (event) => {
    const snap = event.data;
    if (!snap) {
        console.log("No data associated with the event");
        return;
    }

    const applicationData = snap.data();
    const applicationId = event.params.applicationId;

    try {
      // Calculate score and determine tier
      const score = calculateScore(applicationData);
      const tier = getTier(score);

      // Update the document with the new fields
      await admin.firestore().collection("applications").doc(applicationId).update({
        score: score,
        tier: tier,
        status: 'pending_review' // Set initial status
      });

      console.log(`Application ${applicationId} processed successfully. Score: ${score}, Tier: ${tier}`);

    } catch (error) {
      console.error(`Error processing application ${applicationId}:`, error);
      // Optionally, update the document with an error status
      await admin.firestore().collection("applications").doc(applicationId).update({
        status: 'error',
        error: error.message
      });
    }
  });
