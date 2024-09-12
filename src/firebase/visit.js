const {db} = require('./firebase'); // Import the Firestore instance

const visitsCollection = db.collection('visits');

// Create a new visit
async function createVisit(visitData) {
    try {
        const visitRef = await visitsCollection.add(visitData);
        console.log(`Visit created with ID: ${visitRef.id}`);
        return visitRef.id;
    } catch (error) {
        console.error("Error creating visit: ", error);
    }
}

// Get a visit by ID
async function getVisit(visitId) {
    try {
        const visitDoc = await visitsCollection.doc(visitId).get();
        if (visitDoc.exists) {
            return visitDoc.data();
        } else {
            console.log("No such visit!");
            return null;
        }
    } catch (error) {
        console.error("Error getting visit: ", error);
    }
}

// Update a visit by ID
async function updateVisit(visitId, updatedData) {
    try {
        await visitsCollection.doc(visitId).update(updatedData);
        console.log(`Visit with ID: ${visitId} updated successfully.`);
    } catch (error) {
        console.error("Error updating visit: ", error);
    }
}

// Delete a visit by ID
async function deleteVisit(visitId) {
    try {
        await visitsCollection.doc(visitId).delete();
        console.log(`Visit with ID: ${visitId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting visit: ", error);
    }
}

// Get all visits for a specific house
async function getVisitsByHouse(houseId) {
    try {
        const visitsSnapshot = await visitsCollection.where('houseid', '==', houseId).get();
        const visits = [];
        visitsSnapshot.forEach(doc => {
            visits.push({ id: doc.id, ...doc.data() });
        });
        return visits;
    } catch (error) {
        console.error("Error getting visits by house: ", error);
    }
}

// Get all visits by a specific user
async function getVisitsByUser(userId) {
    try {
        const visitsSnapshot = await visitsCollection.where('userid', '==', userId).get();
        const visits = [];
        visitsSnapshot.forEach(doc => {
            visits.push({ id: doc.id, ...doc.data() });
        });
        return visits;
    } catch (error) {
        console.error("Error getting visits by user: ", error);
    }
}

// Get all visits
async function getAllVisits() {
    try {
        const visitsSnapshot = await visitsCollection.get();
        const visits = [];
        visitsSnapshot.forEach(doc => {
            visits.push({ id: doc.id, ...doc.data() });
        });
        return visits;
    } catch (error) {
        console.error("Error getting all visits: ", error);
    }
}

module.exports = {
    createVisit,
    getVisit,
    updateVisit,
    deleteVisit,
    getVisitsByHouse,
    getVisitsByUser,
    getAllVisits
};
