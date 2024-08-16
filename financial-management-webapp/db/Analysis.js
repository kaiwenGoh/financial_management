const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analysisSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categories: [{
        category: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SpendingLimit = mongoose.model('Analysis', analysisSchema);
module.exports = SpendingLimit;
