const { Player } = require('../models');

const resolvers = {
  Query: {
    players: async () => {
      return await Player.find();
    },
  },
  Mutation: {
    createPlayer: async (parent, args, context) => {
      const player = await Player.create(args);

      return player;
    },
    createCharacter: async (
      parent,
      { name, job, level, race, alignment, background },
      context
    ) => {
      const updatedPlayer = await Player.findOneAndUpdate(
        //currently need to hard code id. Will use context once I set up JWT
        { _id: "642ccdc5be7ee749404b0814" },
        {
          $push: {
            characters: {
              name,
              job,
              level,
              race,
              alignment,
              background,
            },
          },
        },           
        { new: true, runValidators: true},
      );
      return updatedPlayer;
    },
  },
};

module.exports = resolvers;
