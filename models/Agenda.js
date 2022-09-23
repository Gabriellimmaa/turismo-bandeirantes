const mongoose = require('mongoose')

const Agenda = mongoose.model('Agenda', {
  clienteKey: String,
  nome: String,
  observacoes: String,
  tipoServico: String,
  servico: String,
  funcionario: String,
  data: Date,
  horario: String,
})

module.exports = Agenda