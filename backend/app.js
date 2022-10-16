require('dotenv').config();
const express = require("express");
const connect = require ('./db/connect')
const ProductRoutes = require("./routes/product");
const path = require("path");
const app = express();
//Seguridad Extra
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
//Puerto de Servidor
const PORT = process.env.PORT || 4000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Rutas a peticiones de productos
app.use("/", ProductRoutes);


app.set("view engine", "ejs"); // motor de plantilla EJS
app.set("views", path.join(__dirname, "../frontend/views"));


//Archivos Estaticos
app.use(express.static(path.join(__dirname, "assets")));


// Seguridad y control de trafico
app.set('trust proxy', 1)
app.use(rateLimiter({
  windowMs: 25 * 60 *1000, //15 minutos
  max: 100, // limite de 100 peticiones por ventana
}))
app.use(helmet())
app.use(cors())
app.use(xss())

//Inicialazamos servidor
app.listen(PORT, async(req, res) => {
    try {
      console.log(`Servidor activo on port: ${PORT}`);
    } catch (error) {
      console.log(error)
    }  
  });

 module.exports = app;