const { Schema } = require('mongoose');

const statSchema = new Schema(
    {
        str: {
            type: Number,
            required: true,
        },
        dex: {
            type: Number,
            required: true,
        },
        con: {
            type: Number,
            required: true,
        },
        int: {
            type: Number,
            required: true,
        },
        wis: {
            type: Number,
            required: true,
        },
        cha: {
            type: Number,
            required: true,
        }
    }
)

module.exports = statSchema;