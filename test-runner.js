
const admin = require('firebase-admin');

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://rep-website-v7.firebaseio.com'
});

const db = admin.firestore();

async function createTestLead() {
  const leadRef = db.collection('leads').doc('test-lead-actively-interviewing');

  try {
    await leadRef.set({
      fullName: "Andrea Test",
      email: "cdeniger@orep.com",
      phone: "555-123-4567",
      answers: {
        current_status: "Actively interviewing",
        career_stage: "Mid-Career"
      },
      archetype: "The Under-Leveraged Expert",
      diagnosis: "Your experience is not being correctly valued by the market, likely because your resume and interview narrative are not aligned with what hiring managers are looking for.",
      riskFactors: [
        "An unfocused resume that fails to tell a clear story",
        "A reactive, rather than proactive, job search strategy",
        "A narrative that undersells your true impact and potential"
      ],
      aiVerdict: "We need to rebuild your narrative to clearly articulate your value and align it with the specific needs of high-growth companies. This will unlock your true earning potential.",
      opportunityTypes: [
        "Roles with 'VP' or 'Director' titles",
        "Companies in the SaaS and enterprise software space",
        "Organizations that have recently received funding"
      ]
    });
    console.log('Test lead created successfully!');
  } catch (error) {
    console.error('Error creating test lead:', error);
    process.exit(1);
  }
}

createTestLead();
