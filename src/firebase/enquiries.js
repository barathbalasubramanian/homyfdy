const db = require('./firebase'); // Import the Firestore instance
const { Timestamp } = require('@google-cloud/firestore');

const enquiriesCollection = db.collection('enquiries');

// Create a new enquiry
async function createEnquiry(enquiryData) {
    try {
        //add created at
        enquiryData.created_at = new Date();
        const enquiryRef = await enquiriesCollection.add(enquiryData);
        console.log(`Enquiry created with ID: ${enquiryRef.id}`);
        return enquiryRef.id;
    } catch (error) {
        console.error("Error creating enquiry: ", error);
    }
}

// Get an enquiry by ID
async function getEnquiry(enquiryId) {
    try {
        const enquiryDoc = await enquiriesCollection.doc(enquiryId).get();
        if (enquiryDoc.exists) {
            return enquiryDoc.data();
        } else {
            console.log("No such enquiry!");
            return null;
        }
    } catch (error) {
        console.error("Error getting enquiry: ", error);
    }
}

// Update an enquiry by ID
async function updateEnquiry(enquiryId, updatedData) {
    try {
        await enquiriesCollection.doc(enquiryId).update(updatedData);
        console.log(`Enquiry with ID: ${enquiryId} updated successfully.`);
    } catch (error) {
        console.error("Error updating enquiry: ", error);
    }
}

// Delete an enquiry by ID
async function deleteEnquiry(enquiryId) {
    try {
        await enquiriesCollection.doc(enquiryId).delete();
        console.log(`Enquiry with ID: ${enquiryId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting enquiry: ", error);
    }
}

// Get all enquiries for a specific house
async function getEnquiriesByHouse(houseId) {
    try {
        const enquiriesSnapshot = await enquiriesCollection.where('houseid', '==', houseId).get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting enquiries by house: ", error);
    }
}

// Get all enquiries by a specific user
async function getEnquiriesByUser(userId) {
    try {
        const enquiriesSnapshot = await enquiriesCollection.where('user_id', '==', userId).get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting enquiries by user: ", error);
    }
}

//Get all enquiries
async function getAllEnquiries() {
    try {
        const enquiriesSnapshot = await enquiriesCollection.get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting all enquiries: ", error);
    }
}

//get enquiries count monthly of current year
async function getEnquiriesCountByMonth() {
    try {
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1); // January 1st of the current year
        const endOfYear = new Date(currentYear + 1, 0, 1); // January 1st of the next year
        
        // Convert to Firestore Timestamp
        const startTimestamp = Timestamp.fromDate(startOfYear);
        const endTimestamp = Timestamp.fromDate(endOfYear);

        // Query to get enquiries from the start of the year to the end of the year
        const enquiriesSnapshot = await enquiriesCollection
            .where('created_at', '>=', startTimestamp)
            .where('created_at', '<', endTimestamp)
            .get();

        // Initialize an array to hold counts for each month
        const monthCounts = Array(12).fill(0);

        // Process each enquiry
        enquiriesSnapshot.forEach(doc => {
            const data = doc.data();
            const createdAt = data.created_at.toDate(); // Convert Timestamp to Date
            const month = createdAt.getMonth(); // Get month (0-based index)
            
            // Increment the count for the appropriate month
            monthCounts[month]++;
        });

        // Create an array with month names and their counts
        const result = monthCounts.map((count, index) => ({
            month: index + 1, // Months are 1-based (1 for January, 2 for February, etc.)
            count
        }));

        return result;
    } catch (error) {
        console.error("Error getting enquiries count by month: ", error);
    }
}





module.exports = {
    createEnquiry,
    getEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiriesByHouse,
    getEnquiriesByUser,
    getAllEnquiries,
    getEnquiriesCountByMonth
};
