const router = require('express').Router(); 

const Styles = require('./boxCalc-helpers'); 

// =============== GET Requests ================
router.get('/box-styles', (req, res) => {
    Styles.getAllStyles()
        .then(styles => res.status(200).json({ data: styles }))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router; 