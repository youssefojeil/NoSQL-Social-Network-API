const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLegnth: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,

        },
        reactions: [reactionSchema]

    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);


const Thought = model('thought', thoughtSchema);

module.exports = Thought;