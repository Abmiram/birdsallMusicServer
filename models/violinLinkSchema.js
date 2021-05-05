const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const violinLinkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const ViolinLink = mongoose.model('ViolinLink', violinLinkSchema);

module.exports = ViolinLink;