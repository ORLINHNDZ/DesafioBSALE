require('dotenv').config();
const express = require("express");
const connect = require ('./db/connect')
const ProductRoutes = require("./routes/product");
const path = require("path");
const app = express();
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

app.listen(PORT, async(req, res) => {
    try {
      console.log(`Servidor activo on port: ${PORT}`);
    } catch (error) {
      console.log(error)
    }  
  });

 module.exports = app;