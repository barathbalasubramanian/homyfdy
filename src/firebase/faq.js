const {db} = require("./firebase");

const faqCollection = db.collection("faq");

async function createFAQ(bookingData) {
  try {
    const faqref = await faqCollection.add(bookingData);
    console.log(`Booking created with ID: ${faqref.id}`);
    return faqref.id;
  } catch (error) {
    console.error("Error creating booking: ", error);
  }
}

// Get a Faq by id
async function getFAQ(id) {
  try {
    const faqDoc = await faqCollection.doc(id).get();
    if (faqDoc.exists) {
      return faqDoc.data();
    } else {
      console.log(`No document with id: ${id} exists`);
    }
  } catch (error) {
    console.error("Error getting booking: ", error);
  }
}

// Update a Faq by id
async function updateFAQ(id, updatedData) {
  try {
    const faqDoc = await faqCollection.doc(id).update(updatedData);
    console.log(`FAQ updated with id: ${id}`);
    return faqDoc;
  } catch (error) {
    console.error("Error updating FAQ: ", error);
  }
}

// Delete a Faq by id
async function deleteFAQ(id) {
  try {
    const faqDoc = await faqCollection.doc(id).delete();
    console.log(`FAQ deleted with id: ${id}`);
    return faqDoc;
  } catch (error) {
    console.error("Error deleting FAQ: ", error);
  }
}

// get all Faq
async function getAllFAQ() {
  try {
    const querySnapshot = await faqCollection.get();
    const faqList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return faqList;
  } catch (error) {
    console.error("Error getting all FAQs: ", error);
  }
}

// exports all
module.exports = {
  createFAQ,
  getFAQ,
  updateFAQ,
  deleteFAQ,
  getAllFAQ,
};
