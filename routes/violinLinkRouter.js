const express = require('express');
const ViolinLink = require('../models/violinLinkSchema');

const violinLinkRouter = express.Router();

violinLinkRouter.route('/')
.get((req, res, next) => {
    ViolinLink.find()
    .then(link => {
        res.status(200).json(link)
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    ViolinLink.create(req.body)
    .then(link => {
        console.log('Link Created ', link);
        res.status(200).json(link);
    })
    .catch(err => next(err));
})
.put((req, res, next) => {
    res.status(403).send('PUT operation not supported on /violinlinks');
})
.delete((req, res, next) => {
    res.status(403).send('DELETE operation not supported on /violinlinks');
})

module.exports = violinLinkRouter;