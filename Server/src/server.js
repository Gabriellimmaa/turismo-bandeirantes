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

const withDB = async (operations, res) => {
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

app.get('/api/restaurante/:id', async (req, res) => {
    withDB(async (db) => {
        const dataId = req.params.id;
        const articleInfo = await db.collection('restaurante').findOne({ id: parseInt(dataId) })
        res.status(200).json(articleInfo);
    }, res)
})

app.post('/api/restaurante/:id/feedback/:value', async (req, res) => {
    withDB(async (db) => {
        const dataId = req.params.id;
        const dataValue = req.params.value;
        if(dataValue == 1){
            await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
                '$inc': {
                    'estrelas.0': 1
                },
            })
        }
        if(dataValue == 2){
            await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
                '$inc': {
                    'estrelas.1': 1
                },
            })
        }
        if(dataValue == 3){
            await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
                '$inc': {
                    'estrelas.2': 1
                },
            })
        }
        if(dataValue == 4){
            await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
                '$inc': {
                    'estrelas.3': 1
                },
            })
        }
        if(dataValue == 5){
            await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
                '$inc': {
                    'estrelas.4': 1
                },
            })
        }

        const updatedArticleInfo = await db.collection('restaurante').findOne({ id: parseInt(dataId) });
        res.status(200).json(updatedArticleInfo);
    }, res)
})

app.post('/api/restaurante/:id/add-comment', (req, res) => {
    withDB(async (db) => {
        const { username, text } = req.body;
        const dataId = req.params.id
    
        const articleInfo = await db.collection('restaurante').updateOne({ id: parseInt(dataId) }, {
            '$push': {
                comentarios: ({ username, text }),
            },
        });

        const updatedArticleInfo = await db.collection('restaurante').findOne({ id: parseInt(dataId) });
        res.status(200).send(updatedArticleInfo);
    }, res);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log("Listening on port 8000"));
