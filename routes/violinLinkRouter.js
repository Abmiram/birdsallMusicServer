const express = require('express');
const authenticate = require('../authenticate');
const ViolinLink = require('../models/violinLinkSchema');

const violinLinkRouter = express.Router();

violinLinkRouter.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
    ViolinLink.find()
    .then(link => {
        res.status(200).json(link)
    })
    .catch(err => next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    ViolinLink.create(req.body)
    .then(link => {
        console.log('Link Created ', link);
        res.status(200).json(link);
    })
    .catch(err => next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
    res.status(403).send('PUT operation not supported on /violinlinks');
})
.delete(authenticate.verifyUser, (req, res, next) => {
    res.status(403).send('DELETE operation not supported on /violinlinks');
})

module.exports = violinLinkRouter;