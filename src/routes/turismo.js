const { withDB } = require("../server");

module.exports = function (app) {
    app.get('/api/turismo/:id', async (req, res) => {
        withDB(async (db) => {
            const dataId = req.params.id;
            const articleInfo = await db.collection('turismo').findOne({ id: parseInt(dataId) })
            res.status(200).json(articleInfo);
        }, res)
    })

    app.post('/api/turismo/:id/feedback/:value', async (req, res) => {
        withDB(async (db) => {
            const dataId = req.params.id;
            const dataValue = req.params.value;
            if (dataValue == 1) {
                await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                    '$inc': {
                        'estrelas.0': 1
                    },
                })
            }
            if (dataValue == 2) {
                await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                    '$inc': {
                        'estrelas.1': 1
                    },
                })
            }
            if (dataValue == 3) {
                await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                    '$inc': {
                        'estrelas.2': 1
                    },
                })
            }
            if (dataValue == 4) {
                await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                    '$inc': {
                        'estrelas.3': 1
                    },
                })
            }
            if (dataValue == 5) {
                await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                    '$inc': {
                        'estrelas.4': 1
                    },
                })
            }

            const updatedArticleInfo = await db.collection('turismo').findOne({ id: parseInt(dataId) });
            res.status(200).json(updatedArticleInfo);
        }, res)
    })

    app.post('/api/turismo/:id/add-comment', (req, res) => {
        withDB(async (db) => {
            const { username, text } = req.body;
            const dataId = req.params.id

            const articleInfo = await db.collection('turismo').updateOne({ id: parseInt(dataId) }, {
                '$push': {
                    comentarios: ({ username, text }),
                },
            });

            const updatedArticleInfo = await db.collection('turismo').findOne({ id: parseInt(dataId) });
            res.status(200).send(updatedArticleInfo);
        }, res);
    })
}