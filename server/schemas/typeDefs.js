const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Player {
        _id: ID
        playerName: String
        email: String
        password: String
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
        level: Int
        type: String
        castingTime: String
        range: String
        components: String
        duration: String
        description: String

    }

    type Stat {
        str: Int,
        dex: Int,
        con: Int,
        int: Int,
        wis: Int,
        cha: Int
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

    type Auth {
        token: ID!
        player: Player
    }

    type Query {
        me: Player
        players: [Player]
        characters: [Character]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createPlayer(playerName: String!, email: String!, password: String!): Auth
        createCharacter(name: String!, job: String!, level: Int!, race: String!, alignment: String!, background: String!): Character
        createStats(str: Int!, dex: Int!, con: Int!, int: Int!, wis: Int!, cha: Int!): Player
        createSavingThrows(name: String!, value: Int!, isProficient: Boolean): Player
        createProficiencies(name: String!, value: Int!, isProficient: Boolean): Player
        createBattle(ac: Int!, health: Int!, tempHealth: Int, initiative: Int!, speed: Int!, hitDice: String!): Player
        createPersonality(traits: String!, ideals: String!, bonds: String!, flaws: String!): Player
        createSpells(name: String!, type: String!, castingTime: String!, range: String!, components: String!, duration: String!, description: String!): Player
    }
`

module.exports = typeDefs;