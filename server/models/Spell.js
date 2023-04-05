const { Schema } = require('mongoose')

const spellSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        castingTime: {
            type: String,
            required: true,
        },
        range: {
            type: String,
            required: true,
        },
        components: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    }
)

module.exports = spellSchema