
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const client = await Client.findOne({_id: id})

    if(!client){
      res.status(422).json({error: 'Usuário não encontrado'})
      return
    }

    res.status(200).json(client)
  }catch(error){
    res.status(500).json({error: error})
  }
})

// update (PUT | PATCH)
router.patch('/:id', async (req, res) => {
  const id = req.params.id

  const {name, telefone} = req.body

  const client = {
    name,
    telefone
  }

  try {
    const updatedClient = await Client.updateOne({_id: id}, client)

    if(updatedClient.matchedCount === 0){
      res.status(422).json({message: 'O usuário não foi encontrado'})
      return
    }

    res.status(200).json(client)
  }catch(error){
    res.status(500).json({error: error})
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const client = await Client.findOne({_id: id})

  if(!client){
    res.status(422).json({error: 'Usuário não encontrado'})
    return
  }

  try {
    await Client.deleteOne({_id: id})

    res.status(200).json({message: 'Usuário removido com sucesso'})
  }catch(error){
    res.status(500).json({error: error})
  }
})

//create
router.post('/', async (req, res) => {
  const {name, telefone} = req.body

  const client = {
    name,
    telefone
  }

  if(!name){
    res.status(402).json({error: "Nome é obrigatório"});
  }

  try {
    await Client.create(client)
    res.status(201).json({message: 'Cliente inserido com sucesso'})
  }catch(error){
    res.status(500).json({error: error})
  }
})
