const fs = require('fs')
const express = require('express');
 const router = express.Router();

//  router.get('./todos')
 router.get('/', (req, res, next) => {
    res.json([1, 2, 3])
})

router.get('/:id', (req, res, next) => {
    res.json({ user: req.params.id })
})

module.exports = router;