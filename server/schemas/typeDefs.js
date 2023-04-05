const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Player {
        _id: ID
        playerName: String
        email: String
        characters: [Character]
    }

    type Character {
        _id: ID
        name: String
        job: String
        level: Int
        race: String
        alignment: String
        background: String
        spells: [Spell]
        stats: [Stat]
        battles: [Battle]
        proficiencies: [Proficiency]
        savingThrows: [SavingThrow]
        personality: [Personality]
    }
    
    type Spell {
        _id: ID
        name: String
        type: String
        castingTime: String
        range: String
        components: String
        duration: String
        description: String

    }

    type Stat {
        _id: ID
        name: String
        value: Int
    }

    type Battle {
        _id: ID
        ac : Int
        health: Int
        tempHealth: Int
        initiative: Int
        speed: Int
        hitDice: String
    }

    type Proficiency {
        _id: ID
        name: String
        value: Int
        isProficient: Boolean
    }

    type SavingThrow {
        _id: ID
        name: String
        value: Int
        isProficient: Boolean
    }
    
    type Personality {
        _id: ID
        traits: String
        ideals: String
        bonds: String
        flaws: String
    }

    type Query {
        players: [Player]
    }

    type Mutation {
        createPlayer(playerName: String!, email: String!): Player
        createCharacter(name: String!, job: String!, level: Int!, race: String!, alignment: String!, background: String!): Player
    }
`

module.exports = typeDefs;