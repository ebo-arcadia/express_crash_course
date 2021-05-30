const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

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
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'please include a name and email'});
    }

    members.push(newMember);
    res.json(members);
});

module.exports = router;