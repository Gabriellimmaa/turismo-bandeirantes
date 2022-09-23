import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '/build')))
app.use(express.static('public'))
app.use(bodyParser.json());

export const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db('front-code');

        await operations(db);

        client.close()
    }
    catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error })
    }
}

require('./routes/restaurante')(app);
require('./routes/turismo')(app);
require('./routes/hotel')(app);
require('./routes/bar')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log("Listening on port 8000"));
