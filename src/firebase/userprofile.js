const db = require("./firebase");
const usersCollection = db.collection("users");

async function fetchUserDocument(phoneNumber) {
  try {
    const userRef = usersCollection.where("number", "==", phoneNumber);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
      console.log("No user found with the given phone number.");
      return null;
    }

    return snapshot.docs[0];
  } catch (error) {
    console.error("Error fetching user document:", error);
    throw error; 
  }
}

async function updateUserDocument(phoneNumber, formData) {
  try {
    const userDoc = await fetchUserDocument(phoneNumber);

    if (!userDoc) {
      throw new Error('User document not found.');
    }

    const userDocRef = userDoc.ref;

    await userDocRef.update({
      mydetails: formData,
    });

    console.log('User document updated successfully.');
  } catch (error) {
    console.error('Error updating user document:', error);
  }
}

module.exports = {
  updateUserDocument,
  fetchUserDocument
};
