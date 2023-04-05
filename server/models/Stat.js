const { Schema } = require('mongoose');

const statSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        }
    }
)

module.exports = statSchema;