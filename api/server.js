// BUILD YOUR SERVER HERE
const express = require('express')
// const User = require('./model.js')

const server = express()

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found' 
    })
})

//ENDPOINTS




module.exports = server; // EXPORT YOUR SERVER instead of {}
