const db = require('../db/db-config'); 

module.exports = {
    getAllStyles,
}

function getAllStyles() {
    return db('box_styles'); 
}