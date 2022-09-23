require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

module.exports = withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect(process.env.BD_MONGO, { useNewUrlParser: true })
        const db = client.db('front-code');

        await operations(db);

        client.close()
    }
    catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error })
    }

}