const { Schema } = require('mongoose');

const personalitySchema = new Schema(
    {
        traits: {
            type: String,
        },
        ideals: {
            type: String,
        },
        bonds: {
            type: String,
        },
        flaws: {
            type: String
        }
    }
)

module.exports = personalitySchema;