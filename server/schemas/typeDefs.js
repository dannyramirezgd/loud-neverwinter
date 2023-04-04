const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Player {
        _id: ID
        playerName: String
    }

    type Query {
        players: [Player]
    }
`

module.exports = typeDefs;