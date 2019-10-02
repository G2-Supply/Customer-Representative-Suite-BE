const express = require('express'); 

// initializing server
const server = express(); 

// security imports 
const helmet = require('helmet'); 
const cors = require('cors');

// middleware instantiation
server.use(express.json());
server.use(cors({
    origin: '*'
})); 
server.use(helmet()); 

// router imports
const boxCalcRouter = require('./boxCalc/boxCalcRouter'); 

// routing 
server.use('/api', boxCalcRouter)

module.exports = server; 
