
const admin = require('firebase-admin');

// Initialize the app without a project ID to use the environment's active project.
admin.initializeApp();

const db = admin.firestore();

async function createTestLead() {
  console.log('Attempting to create a new lead document in Firestore...');
  try {
    const docRef = await db.collection('leads').add({
      fullName: 'Direct Script Test',
      email: 'cdeniger@orep.com',
      archetype: 'Admin SDK Test',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('Successfully created document with ID:', docRef.id);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

createTestLead();
