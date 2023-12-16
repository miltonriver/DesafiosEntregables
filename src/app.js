const express = require('express')
const productos = require('../ProductManager3')
// const ProductManager = require('../ProductManager3')
// const productos = new ProductManager()


const app = express()

app.get('/products', (req, res) => {
    const limiteProductos = req.query.limit

    if(limiteProductos <  productos.getProducts().length){
        const numeroDeProductos = productos.getProducts().filter(prod => prod.id <= limiteProductos);
        res.send(numeroDeProductos)
    }

    res.send(productos.getProducts())
})

//este método get lo puedo hacer con un productos.getProducts().find pero como ya tengo incorporado en mi constructor un método find para encontrar productos por ID, puedo llamar a ese método y comparar el parámetro que me pasan, va a funcionar de la misma forma
app.get('/products/:pid', (req, res) => {
    const { pid } = req.params
    const product = productos.getProductById(Number(pid))
    console.log('Esta es la ruta de productos')
    res.send(product)
})

const port = 8080
app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`)
})