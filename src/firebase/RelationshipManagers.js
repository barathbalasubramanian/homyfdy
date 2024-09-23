const { db } = require("./firebase");

const managersCollection = db.collection("RelationshipManagers");

// Create a new Relationship Manager
async function createManager(managerData) {
  try {
    const managerRef = await managersCollection.add(managerData);
    console.log(`Manager created with ID: ${managerRef.id}`);
    return managerRef.id;
  } catch (error) {
    console.error("Error creating manager: ", error);
  }
}

// Get a Relationship Manager by ID
async function getManager(id) {
  try {
    const managerDoc = await managersCollection.doc(id).get();
    if (managerDoc.exists) {
      return managerDoc.data();
    } else {
      console.log(`No document with ID: ${id} exists`);
    }
  } catch (error) {
    console.error("Error getting manager: ", error);
  }
}

// Update a Relationship Manager by ID
async function updateManager(id, updatedData) {
  try {
    await managersCollection.doc(id).update(updatedData);
    console.log(`Manager updated with ID: ${id}`);
  } catch (error) {
    console.error("Error updating manager: ", error);
  }
}

// Delete a Relationship Manager by ID
async function deleteManager(id) {
  try {
    await managersCollection.doc(id).delete();
    console.log(`Manager deleted with ID: ${id}`);
  } catch (error) {
    console.error("Error deleting manager: ", error);
  }
}

async function getManagerDataByName(name) {
    try {
        const querySnapshot = await managersCollection.where("managerName", "==", name).get();

        if (querySnapshot.empty) {
            console.log(`No manager found with the name: ${name}`);
            return null; // Return null if no manager found
        }

        const managerData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return managerData; 
    } catch (error) {
        console.error("Error fetching manager data: ", error);
    }
}

// Get all Relationship Managers
async function getAllManagers() {
  try {
    const querySnapshot = await managersCollection.get();
    const managerList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return managerList;
  } catch (error) {
    console.error("Error getting all managers: ", error);
    return [];
  }
}

// Exports all
module.exports = {
  createManager,
  getManager,
  updateManager,
  deleteManager,
  getAllManagers,
  getManagerDataByName
};
