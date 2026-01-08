const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.submitDiagnostic = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { archetype } = req.body;

    if (!archetype) {
      return res.status(400).send("Missing archetype");
    }

    return admin.firestore().collection("diagnosticSubmissions").add({
      archetype: archetype,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      return res.status(201).send("Success");
    })
    .catch(error => {
      console.error("Error writing to Firestore", error);
      return res.status(500).send("Internal Server Error");
    });
  });
});
