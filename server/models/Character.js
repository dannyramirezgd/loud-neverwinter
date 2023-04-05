const { Schema } = require('mongoose');
const spellSchema = require('./Spell');
const statSchema = require('./Stat');
const battleSchema = require('./Battle');
const proficiencySchema = require('./Proficiencies');
const savingThrowSchema = require('./SavingThrows');
const personalitySchema = require('./Personality');

//make this a model

const characterSchema = new Schema(
    {
        name: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        job: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        },
        race: {
            type: String,
            required: true,
        },
        alignment: {
            type: String,
        },
        background: {
            type: String,
        },
        spells: [spellSchema],
        stats: [statSchema],
        battles: [battleSchema],
        proficiences: [proficiencySchema],
        savingThrows: [savingThrowSchema],
        personality: [personalitySchema]
    }
)

module.exports = characterSchema