import express from 'express'
import {Request, Response, Express} from 'express'
import Persona from './Persona'

const app: Express = express()

const p: Persona = new Persona('Coder','House')

app.get('/',(req:Request, res: Response) => {
    return res.send({
        time: getTime(),
        name
    })
})
const PORT:number = 8080

app.listen(PORT,() => `Servidor corriendo en el puerto${PORT}`)