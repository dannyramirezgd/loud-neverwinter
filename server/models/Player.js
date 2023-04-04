const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const playerSchema = new Schema(
    {
        playerName:{
            type: String,
            required: true,
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

const Player = model('Player', playerSchema);

module.exports = Player