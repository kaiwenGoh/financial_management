const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spendingRecordSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const SpendingRecord = mongoose.model('SpendingRecord', spendingRecordSchema);
module.exports = SpendingRecord;
