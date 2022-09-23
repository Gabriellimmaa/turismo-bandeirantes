const mongoose = require('mongoose')

const Client = mongoose.model('Client', {
  nome: String,
  celular: String,
  observacoes: String,
  montante: Number,
  data: Date,
  descricaoDivida: String,
  status: Boolean,
})

module.exports = Client