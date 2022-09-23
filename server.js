require('dotenv').config();
//config inicial
const express = require('express');
const app = express();

let cors = require("cors");

// forma de le JSON
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(cors());

app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})

// rotas da api
require('./routes/restaurante')(app);
require('./routes/turismo')(app);
require('./routes/hotel')(app);
require('./routes/bar')(app);


app.get('/', (req, res) => {
  res.json({message: 'oi expres'})

})

var listener  = app.listen(process.env.PORT)
console.log(listener.address())