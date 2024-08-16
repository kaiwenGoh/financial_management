const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spendingLimitSchema = new Schema({
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
    limit: {
        type: Number,
        required: true
    },
    actualSpent: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SpendingLimit = mongoose.model('SpendingLimit', spendingLimitSchema);
module.exports = SpendingLimit;
