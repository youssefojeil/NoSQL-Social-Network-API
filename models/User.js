const { Schema, model } = require('mongoose');

// Schema to create User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: RegExp(email)

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `friendCount` that gets the user's friends array field on query
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


// Initialize User model
const User = model('user', userSchema);

module.exports = User;
