const connect = require('../db/connect');

//Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        let sql = "SELECT * FROM product";
        connect.query(sql, (error, results) => {

            if (error) throw error; 
            else{
                res.render("products", {
                  data: results,
                });
            }
      
    });
    } catch (error) {
        console.log(error)
    }
    
}

//Buscar productos

const buscarProductos = async (req, res) => {
    try {
        const name =  await req.query.name;
        let sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`
        connect.query(sql, (err, results) => {
            if (results.length > 0) {
              res.render("products", {
                data: results,
              });
            } 
          });
    } catch (error) {
        console.log(error)
    }  
    
}

//Producto individual

const detalleProducto = (req, res) => {
    try {
        const { id } = req.params;
        let sql = `SELECT * FROM product WHERE name LIKE '%${id}%'`;
        connect.query(sql, (error, results) => {
            if (error) throw error;
             else {
              res.render("detailProduct", {
                data: results[0],
              });
            }
          });
    } catch (error) {
        console.log(error)
    }
}

//Ordenar por Categoria
const buscarCategoria = async (req, res) => {
  try {
      const id = req.params.id;
      let sql = `select prod.id, cat.name as category, prod.url_image, prod.price, prod.name from product prod inner join category cat on prod.category = cat.id WHERE category = ${id}`
      connect.query(sql, (err, results) => {
          if (results.length > 0) {
            res.render("products", {
              data: results,
            });
          } 
        });
  } catch (error) {
      console.log(error)
  }  
  
}

//Mostrar Productos de manera ascendente
const productoAsc = (req, res) =>{
    try {
        let sql = "select * from product ORDER BY price asc";
        connect.query(sql, (error, results) => {
            if (error) throw error;
               else {
                res.render("products", {
                  data: results,
                });
              }
          });
    } catch (error) {
        
    }
}

//Orden alfabetico
const productoAlfa = (req, res) =>{
    try {
        let sql = "select * from product ORDER BY name asc";
        connect.query(sql, (error, results) => {
            if (error) throw error;
               else {
                res.render("products", {
                  data: results,
                });
              }
          });
    } catch (error) {
        
    }
}
//Mostrar productos de manera descendente
const productoDesc = (req, res) =>{
    try {
        let sql = "select * from product ORDER BY price desc";
        connect.query(sql, (error, results) => {
            if (error) throw error;
               else {
                res.render("products", {
                  data: results,
                });
              }
          });
    } catch (error) {
        
    }
}
module.exports = {
    getProductos, buscarProductos, detalleProducto, productoAsc, productoAlfa, productoDesc, buscarCategoria
}