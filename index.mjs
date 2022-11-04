// const express = require('express')
import express from 'express'

const app = express()

app.get('/', (req, res) => res.send({ message: 'Hello World' }))
app.get('/users', (req, res) => res.send({ message: 'Obteniendo usuario' }))
app.post('/users', (req, res) => res.send({ message: 'Creando usuario' }))

app.listen(3000)
console.log('Server is running on port 3000')
