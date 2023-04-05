const { Schema } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        class: {
            type: String,
            required: true,
            maxLength: 50,
        },
        race: {
            type: String,
            required: true,
            maxLength: 50
        },
        health: {
            type: Number, 
            required: true,
        },
        ac: {
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
            type: Number, 
            required: true,
        },
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
        },
        personality: {
            type: String,
        },
        ideals: {
            type: String,
        },
        bonds: {
            type: String,
        },
        flaws: {
            type: String,
        },
        
    }
)

module.exports = characterSchema