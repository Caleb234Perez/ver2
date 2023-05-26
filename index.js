const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})
app.get('/', (req,res) => {
    res.send({message:"hola mundo soy Emmanuel Caleb Perez Estrada"});
   });
app.get('/ayuda', (req,res) => {
    res.send({message:"En que te ayudo soy Emmanuel Caleb Pérez Estrada "});
   });
app.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
   });
app.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
   });
   
   