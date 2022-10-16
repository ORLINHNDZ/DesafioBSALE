const express = require("express");
const router = express.Router();
const {getProductos, buscarProductos, detalleProducto, productoAsc, productoAlfa, productoDesc, buscarCategoria} = require("../controllers/product");

router.route('/').get(getProductos)
router.route('/prod').get(buscarProductos)
router.route('/prod/:id').get(detalleProducto)
router.route('/asc').get(productoAsc)
router.route('/desc').get(productoDesc)
router.route('/alfa').get(productoAlfa)
router.route('/:id').get(buscarCategoria)




module.exports = router;
