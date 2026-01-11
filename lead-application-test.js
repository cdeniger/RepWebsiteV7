
const admin = require('firebase-admin');

// Initialize the app without a project ID to use the environment's active project.
admin.initializeApp();

const db = admin.firestore();

async function createTestApplication() {
  console.log('Attempting to create a new application document in Firestore...');
  try {
    const docRef = await db.collection('applications').add({
      fullName: 'Lead Application Test',
      email: 'cdeniger@orep.com',
      archetype: 'Real Estate Agent',
      employmentStatus: 'Passive: Happily employed but open to strategic moves.',
      pipelineVelocity: 'Active but dissatisfied',
      serviceNeed: 'Strategy: "I need a partner to manage my career architecture and negotiation."',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Successfully created document with ID:', docRef.id);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

createTestApplication();
