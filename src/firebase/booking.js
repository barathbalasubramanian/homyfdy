const db = require('./firebase'); 

const bookingsCollection = db.collection('bookings');

// Create a new booking
async function createBooking(bookingData) {
    try {
        const bookingRef = await bookingsCollection.add(bookingData);
        console.log(`Booking created with ID: ${bookingRef.id}`);
        return bookingRef.id;
    } catch (error) {
        console.error("Error creating booking: ", error);
    }
}

// Get a booking by ID
async function getBooking(bookingId) {
    try {
        const bookingDoc = await bookingsCollection.doc(bookingId).get();
        if (bookingDoc.exists) {
            return bookingDoc.data();
        } else {
            console.log("No such booking!");
            return null;
        }
    } catch (error) {
        console.error("Error getting booking: ", error);
    }
}

// Update a booking by ID
async function updateBooking(bookingId, updatedData) {
    try {
        await bookingsCollection.doc(bookingId).update(updatedData);
        console.log(`Booking with ID: ${bookingId} updated successfully.`);
    } catch (error) {
        console.error("Error updating booking: ", error);
    }
}

// Delete a booking by ID
async function deleteBooking(bookingId) {
    try {
        await bookingsCollection.doc(bookingId).delete();
        console.log(`Booking with ID: ${bookingId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting booking: ", error);
    }
}

// Get all bookings for a specific house
async function getBookingsByHouse(houseId) {
    try {
        const bookingsSnapshot = await bookingsCollection.where('houseid', '==', houseId).get();
        const bookings = [];
        bookingsSnapshot.forEach(doc => {
            bookings.push({ id: doc.id, ...doc.data() });
        });
        return bookings;
    } catch (error) {
        console.error("Error getting bookings by house: ", error);
    }
}

// Get all bookings by a specific user
async function getBookingsByUser(userId) {
    try {
        const bookingsSnapshot = await bookingsCollection.where('user_id', '==', userId).get();
        const bookings = [];
        bookingsSnapshot.forEach(doc => {
            bookings.push({ id: doc.id, ...doc.data() });
        });
        return bookings;
    } catch (error) {
        console.error("Error getting bookings by user: ", error);
    }
}

// Get all bookings
async function getAllBookings() {
    try {
        const bookingsSnapshot = await bookingsCollection.get();
        const bookings = [];
        bookingsSnapshot.forEach(doc => {
            bookings.push({ id: doc.id, ...doc.data() });
        });
        return bookings;
    } catch (error) {
        console.error("Error getting all bookings: ", error);
    }
}

module.exports = {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
    getBookingsByHouse,
    getBookingsByUser,
    getAllBookings
};
