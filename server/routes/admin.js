const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if (err) console.log(err);
        res.render('admin/index', {users});
     })
})

router.get('/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
        res.render('admin/show', {user});
    })
})

router.get('/:id/edit', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user) {
        res.render('admin/edit', {user});
    })
})

router.put('/:id', function(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body.user, function(err) {
        if (err) console.log(err);
        res.redirect('/admin')
    })
})

router.delete('/:id', function(req, res) {
    User.remove({_id: req.params.id }, function(err) {
        if (err) console.log(err);
        res.redirect('/admin')
    })
})

module.exports = router;