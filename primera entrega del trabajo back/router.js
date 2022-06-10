const express= require('express')

const productoRouter =require ('./carrito.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/carrito.json',productoRouter)

const PORT= 8080
const server = app.listen(PORT,()=>{
    console.log(`Servidor HTTP escuchando en el puerto${PORT}`)
})
server.on('error', error=> console.log(`Error en servidor:${error}`))
