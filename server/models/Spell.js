const { Schema, model } = require('mongoose')

const spellSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
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
        material: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        higher_level: {
            type: String,
            required: true
        }
    }
)

const Spell = model('Spell', spellSchema);


module.exports = Spell;