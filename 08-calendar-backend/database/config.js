const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB is Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error at the begining of DB initialization');
    }
}

module.exports = dbConnection;
