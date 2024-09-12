const {db} = require('./firebase'); // Import the Firestore instance

const housesCollection = db.collection('houses');

// Create a new house
async function createHouse(houseData) {
    try {
        const houseRef = await housesCollection.add(houseData);
        console.log(`House created with ID: ${houseRef.id}`);
        return houseRef.id;
    } catch (error) {
        console.error("Error creating house: ", error);
    }
}

// Get a house by ID
async function getHouse(houseId) {
    try {
        const houseDoc = await housesCollection.doc(houseId).get();
        if (houseDoc.exists) {
            return {id: houseDoc.id, ...houseDoc.data()};
        } else {
            console.log("No such house!");
            return null;
        }
    } catch (error) {
        console.error("Error getting house: ", error);
    }
}

// Update a house by ID
async function updateHouse(houseId, updatedData) {
    try {
        await housesCollection.doc(houseId).update(updatedData);
        console.log(`House with ID: ${houseId} updated successfully.`);
    } catch (error) {
        console.error("Error updating house: ", error);
    }
}

// Delete a house by ID
async function deleteHouse(houseId) {
    try {
        await housesCollection.doc(houseId).delete();
        console.log(`House with ID: ${houseId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting house: ", error);
    }
}

// Get all houses
async function getAllHouses() {
    try {
        const housesSnapshot = await housesCollection.get();
        const houses = [];
        housesSnapshot.forEach(doc => {
            houses.push({ id: doc.id, ...doc.data() });
        });
        return houses;
    } catch (error) {
        console.error("Error getting all houses: ", error);
    }
}

module.exports = {
    createHouse,
    getHouse,
    updateHouse,
    deleteHouse,
    getAllHouses
};
