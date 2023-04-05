const { Schema } = require('mongoose');

const battleSchema = new Schema(
    {
        ac: {
            type: Number,
            required: true,
        },
        health: {
            type: Number,
            required: true,
        },
        tempHealth: {
            type: Number,
            required: true,
        },
        initiative: {
            type: Number,
            required: true,
        },
        speed: {
            type: Number,
            required: true,
        },
        hitDice: {
            type: String,
            required: true,
        }
    }
)

module.exports = battleSchema;