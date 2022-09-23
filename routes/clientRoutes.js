const router = require('express').Router();

const Client = require('../models/Client');
const ObjectId = require('mongodb').ObjectID;


router.get('/', async (req, res) => {
  try {
    const clients = await Client.find()
    res.status(200).json(clients)
  }catch(error){
    res.status(500).json({error: error})
  }
})

router.get('/:nome', async (req, res) => {
  try {
    const clients = await Client.findOne({nome: req.params.nome})
    res.status(200).json(clients)
  }catch(error){
    res.status(500).json({error: error})
  }
})

router.post('/:id/delete', async (req, res) => {
  try {
    const clients = await Client.deleteOne({_id: new ObjectId(req.params.id)})
    res.status(200).json(clients)
  }catch(error){
    res.status(500).json({error: error})
  }
})

router.post('/:id/montante-update/:quantidade', async (req, res) => {
  try {
    const resultInfo = await Client.updateOne({ _id: new ObjectId(req.params.id) }, {
      '$inc': {
          montante: parseFloat(req.params.quantidade),
      },
    });
    const userInfo = await Client.findOne({ _id: new ObjectId(req.params.id) })
    if (userInfo['montante'] == 0) {
      const resultInfo = await Client.updateOne({ _id: new ObjectId(req.params.id) }, {
          '$set': {
              status: true,
          },
      });
      res.status(200).json(userInfo);
    }else{
        const resultInfo = await Client.updateOne({ _id: new ObjectId(req.params.id) }, {
            '$set': {
                status: false,
            },
        });
        res.status(200).json(userInfo);
    }
  }catch(error){
    res.status(500).json({error: error})
  }
})

router.post('/add-cliente', async (req, res) => {
  const {
    nome,
    celular,
    observacoes,
    montante,
    data,
    descricaoDivida,
    status
  } = req.body;

  const client = {
    nome,
    celular,
    observacoes,
    montante,
    data: new Date(data),
    descricaoDivida,
    status
  }

  if(!nome){
    res.status(402).json({error: "Nome é obrigatório"});
  }

  const getDocument = await Client.findOne({ nome: nome });
  if (getDocument == null) {
    await Client.create(client);
    const getDocument = await Client.findOne({ nome: nome });
    res.status(200).send(getDocument);
  } else {
    res.status(500).json({ message: 'Já existe um cliente com este nome' })
  }

})

module.exports = router