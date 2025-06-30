const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
const URI_MAIN = process.env.MONGODB_URI_MAIN;

// Default connection for primary database
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connected to primary database');
    } catch (error) {
        console.error('Failed to connect to primary database', error.message);
        throw error; // Propagate the error
    }
};

// Separate connection for secondary database
const connectDbMain = async () => {
    try {
        // Use createConnection for the second database to avoid conflicting connections
        const secondaryDb = mongoose.createConnection(URI_MAIN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        secondaryDb.once('open', () => {
            console.log('Connected to secondary database');
        });

        return secondaryDb;
    } catch (error) {
        console.error('Failed to connect to secondary database', error.message);
        throw error; // Propagate the error
    }
};

module.exports = { connectDb, connectDbMain };
