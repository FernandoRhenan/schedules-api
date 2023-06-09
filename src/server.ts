import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const server = express()


const port = process.env.PORT || 3000
server.listen(port, ()=>{
    console.log('Server rodando na porta ' + port)
})