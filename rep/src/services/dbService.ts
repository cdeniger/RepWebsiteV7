
import { DiagnosticState } from '../types';
import { db } from '../firebase-config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveLeadData = async (state: DiagnosticState): Promise<void> => {
    try {
        const leadData = {
            fullName: state.leadInfo.fullName,
            email: state.leadInfo.email,
            phone: state.leadInfo.phone || null,
            archetype: state.snapshotData?.hook?.title,
            aiVerdict: state.aiAnalysis,
            answers: state.answers,
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, "leads"), leadData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        // Re-throw the error to be handled by the calling component
        throw e;
    }
};
