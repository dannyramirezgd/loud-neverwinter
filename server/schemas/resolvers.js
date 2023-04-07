const { Player, Character } = require('../models');
// const newCharacter = require('../utils/newCharacter')

const resolvers = {
  Query: {
    players: async () => {
      return await Player.find();
      // const playerData = await Player.find({})
      //   .select('-__v')
      //   .populate('characters');

      // return playerData;
    },
    characters: async () => {
      //need to find a way to find a specific item in the array of characters
      //maybe a .map or .filter function by id? but how would I grab id? Maybe by name? but I would have to click it
      //BUT if it's a button on the front I can pull the ID because I can map the array and display and when clicked just grab the ID
      return await Character.find({});
    },
  },
  Mutation: {
    createPlayer: async (parent, args, context) => {
      const player = await Player.create(args);

      return player;
    },
    createCharacter: async (parent, args, context) => {
      const character = args;
      // character.stats.push(newStats)
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { characters: character } },
        { new: true },
      );
      return updatedPlayer;
    },
    createStats: async (parent,  args , context) => {

      //need to use context once I have this up and running
      //replace "newName" with 

      console.log(args)

      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: playerId },
        { $set: { 'characters.$[elem].stats': args} },
        {
          arrayFilters: [{ 'elem.name': { $eq: "newName" } }],
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
  },
};

module.exports = resolvers;
