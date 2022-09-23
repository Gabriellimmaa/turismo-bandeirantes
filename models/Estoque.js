const mongoose = require('mongoose')

const Estoque = mongoose.model('Estoque', {
  nome: String,
  categoria: String,
  quantidade: Number,
  valorVenda: Number,
  valorProducao: Number,
  qtdBom: Number,
  qtdNormal: Number,
  qtdRepor: Number,
  nivelEstoque: Number,
})

module.exports = Estoque