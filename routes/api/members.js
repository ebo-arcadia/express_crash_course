const express = require('express');
const router = express.Router();
const members = require('../../Members');

// create routes to get all members
router.get(`/`, (request, response) => response.json(members));

// get a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}`});
    }
});

// create memebr
router.post(`/`, (req, res) => {
    res.send(req.body)
});

module.exports = router;