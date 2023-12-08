const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGODB_STRING)
        .then(() => {
            console.log('Connected to database')
            console.log(`------------------`)

        })
        .catch((err) => console.error(err)
        );
};

module.exports = connectToDatabase;