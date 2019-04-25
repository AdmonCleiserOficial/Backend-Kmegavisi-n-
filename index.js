const express = require('express');
const baseDeDatos = require('mongoose');
const Parsero = require('body-parser');
const cors = require('cors');
const servidor = express();
// sirve para mandar o recibir datos en json
servidor.use(Parsero.urlencoded({extended:true}));
servidor.use(Parsero.json());

// servidor necesita un puerto DE HOSTING O SINO 3000
  servidor.set('port',process.env.PORT || 3000 );
const puerto =  servidor.get('port');
// servidor necesita protocolo internet
servidor.use(cors());

// Rutas 

servidor.get('/',(req,res)=>{
    console.log(`alguien entro a mi servidor`);
})

//www.facebook.com/hola?nombre=enrique
servidor.get('/hola',(req,res)=>{
    console.log(req.query);

});

// asincronos 
servidor.listen(puerto, ()=>{
    console.log(`servidor corriendo exitosamente en el puerto ${puerto}`);

});

// ya quedo el servidor funcionando!!
// perfecto 

