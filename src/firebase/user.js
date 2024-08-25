const db = require('./firebase'); 

const usersCollection = db.collection('users');
const housesCollection = db.collection('houses');

// Create a new user
async function createUser(userData) {
    try {
        const userRef = await usersCollection.add(userData);
        console.log(`User created with ID: ${userRef.id}`);
        return userRef.id;
    } catch (error) {
        console.error("Error creating user: ", error);
    }
}

// Get a user by ID
async function getUser(userId) {
    try {
        const userDoc = await usersCollection.doc(userId).get();
        if (userDoc.exists) {
            return userDoc.data();
        } else {
            console.log("No such user!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user: ", error);
    }
}

// Update a user by ID
async function updateUser(userId, updatedData) {
    try {
        await usersCollection.doc(userId).update(updatedData);
        console.log(`User with ID: ${userId} updated successfully.`);
    } catch (error) {
        console.error("Error updating user: ", error);
    }
}

// Delete a user by ID
async function deleteUser(userId) {
    try {
        await usersCollection.doc(userId).delete();
        console.log(`User with ID: ${userId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting user: ", error);
    }
}

// Add watched history to a user
async function addWatchedHistory(userId, houseId, timestamp) {
    try {
        const userRef = usersCollection.doc(userId);
        await userRef.update({
            watched: firebase.firestore.FieldValue.arrayUnion({ houseId, timestamp })
        });
        console.log(`Watched history added for user with ID: ${userId}`);
    } catch (error) {
        console.error("Error adding watched history: ", error);
    }
}

// Add a favorite house to a user
async function addFavorite(userId, houseId) {
    try {
        const userRef = usersCollection.doc(userId);
        await userRef.update({
            favorite: firebase.firestore.FieldValue.arrayUnion(houseId)
        });
        console.log(`Favorite house added for user with ID: ${userId}`);
    } catch (error) {
        console.error("Error adding favorite: ", error);
    }
}

// Get all favorite houses with details for a user
async function getAllFavoritesWithDetails(userId) {
    try {
        const userDoc = await usersCollection.doc(userId).get();
        if (!userDoc.exists) {
            console.log("No such user!");
            return null;
        }
        
        const favoriteIds = userDoc.data().favorite || [];
        const favoriteDetailsPromises = favoriteIds.map(houseId => housesCollection.doc(houseId).get());
        const favoriteDetails = await Promise.all(favoriteDetailsPromises);
        
        return favoriteDetails.map(doc => doc.data());
    } catch (error) {
        console.error("Error getting favorites with details: ", error);
    }
}

// Get specific favorite houses with details for a user
async function getFavoritesWithDetails(houseIds) {
    try {
        const favoriteDetailsPromises = houseIds.map(houseId => housesCollection.doc(houseId).get());
        const favoriteDetails = await Promise.all(favoriteDetailsPromises);
        
        return favoriteDetails.map(doc => doc.data());
    } catch (error) {
        console.error("Error getting specific favorites with details: ", error);
    }
}

//get all users
async function getallUsers(){
    try {
        const usersSnapshot = await usersCollection.get();
        const users = [];
        usersSnapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });
        return users;
    } catch (error) {
        console.error("Error getting all Users: ", error);
    }
}




module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addWatchedHistory,
    addFavorite,
    getAllFavoritesWithDetails,
    getFavoritesWithDetails,
    getallUsers
};
