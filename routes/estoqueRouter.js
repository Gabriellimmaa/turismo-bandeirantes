const router = require('express').Router();

const Estoque = require('../models/Estoque');
const ObjectId = require('mongodb').ObjectID;

router.get('/', async (req, res) => {
  try {
    const estoque = await Estoque.find()
    res.status(200).json(estoque)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.get('/:nome', async (req, res) => {
  try {
    const estoque = await Estoque.findOne({ nome: req.params.nome })
    res.status(200).json(estoque)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.post('/:nome/delete', async (req, res) => {
  try {
    const estoque = await Estoque.findOneAndDelete({ nome: req.params.nome })
    res.status(200).json(estoque)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.post('/:nome/quantidade-update/:quantidade', async (req, res) => {
  try {
    const resultInfo = await Estoque.findOneAndUpdate({ nome: req.params.nome }, {
      '$inc': {
        quantidade: parseInt(req.params.quantidade),
      },
    });
    res.status(200).json(resultInfo);
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.post('/add-produto', async (req, res) => {
  const {
    nome,
    categoria,
    quantidade,
    valorVenda,
    valorProducao,
    qtdBom,
    qtdNormal,
    qtdRepor,
    nivelEstoque
  } = req.body;

  const estoque = {
    nome,
    categoria,
    quantidade,
    valorVenda,
    valorProducao,
    qtdBom,
    qtdNormal,
    qtdRepor,
    nivelEstoque
  }

  if (!nome) {
    res.status(402).json({ error: "Nome é obrigatório" });
  }

  const getDocument = await Estoque.findOne({ nome: nome });
  if (getDocument == null) {
    await Estoque.create(estoque);
    const getDocument = await Estoque.findOne({ nome: nome });
    res.status(200).send(getDocument);
  } else {
    res.status(500).json({ message: 'Já existe um produto com este nome' })
  }

})

module.exports = router