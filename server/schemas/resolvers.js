const { Player } = require('../models')

const resolvers = {
    Query: {
       players: async () => {
        return await Player.find();
       }
    }
}

module.exports = resolvers