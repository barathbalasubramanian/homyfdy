const db = require('./firebase'); 

const developersCollection = db.collection('developers');

// Create a new developer
async function createDeveloper(developerData) {
    try {
        const developerRef = await developersCollection.add(developerData);
        console.log(`Developer created with ID: ${developerRef.id}`);
        return developerRef.id;
    } catch (error) {
        console.error("Error creating developer: ", error);
    }
}

// Get a developer by ID
async function getDeveloper(developerId) {
    try {
        const developerDoc = await developersCollection.doc(developerId).get();
        if (developerDoc.exists) {
            return developerDoc.data();
        } else {
            console.log("No such developer!");
            return null;
        }
    } catch (error) {
        console.error("Error getting developer: ", error);
    }
}

// Update a developer by ID
async function updateDeveloper(developerId, updatedData) {
    try {
        await developersCollection.doc(developerId).update(updatedData);
        console.log(`Developer with ID: ${developerId} updated successfully.`);
    } catch (error) {
        console.error("Error updating developer: ", error);
    }
}

// Delete a developer by ID
async function deleteDeveloper(developerId) {
    try {
        await developersCollection.doc(developerId).delete();
        console.log(`Developer with ID: ${developerId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting developer: ", error);
    }
}

// Get all developers
async function getAllDevelopers() {
    try {
        const developersSnapshot = await developersCollection.get();
        const developers = [];
        developersSnapshot.forEach(doc => {
            developers.push({ id: doc.id, ...doc.data() });
        });
        return developers;
    } catch (error) {
        console.error("Error getting all developers: ", error);
    }
}

module.exports = {
    createDeveloper,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper,
    getAllDevelopers
};
