const { Schema, model } = require('mongoose');
//const spellSchema = require('./Spell');
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
        spells: [
            {
                type: Schema.Types.ObjectId, 
                ref:  'Spell'
            }
        ],
        stats: [statSchema],
        battles: [battleSchema],
        proficiencies: [proficiencySchema],
        savingThrows: [savingThrowSchema],
        personality: [personalitySchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

//const Character = model('Character', characterSchema)

//module.exports = Character

module.exports = characterSchema