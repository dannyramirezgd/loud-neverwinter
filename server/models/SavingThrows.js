const { Schema } = require('mongoose');

const savingThrowSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        isProficient: {
            type: Boolean,
            required: true,
        }
    }
)

module.exports = savingThrowSchema;