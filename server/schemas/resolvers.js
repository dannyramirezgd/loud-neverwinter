const { AuthenticationError } = require('apollo-server-express');
const { Player, Spell } = require('../models');
const { signToken } = require('../utils/auth')
// const newCharacter = require('../utils/newCharacter')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.player) {
        const playerData = await Player.findOne({
          _id: context.player._id
        }).select('-__v -password')

        return playerData
      }

      throw new AuthenticationError('Not logged in')
    },
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
    login: async (parent, {email, password}) => {
      const player = await Player.findOne({ email });

      if(!player) {
        throw new AuthenticationError('Incorrect credentials')
      }

      const correctPw = await player.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }

      const token = signToken(player)
      return { token, player }
    },
    createPlayer: async (parent, args) => {
      const player = await Player.create(args);
      const token = signToken(player)

      return {token, player};
    },
    createCharacter: async (parent, args, context) => {
      const character = args;
      //could I do a const character = createStats(statArgs),createBattle(battleArgs), yadda yadda?
      // character.stats.push(newStats)
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { characters: character } },
        { new: true },
      );
      return updatedPlayer;
    },
    createStats: async (parent, args, context) => {
      //need to use context once I have this up and running
      //replace "newName" with

      console.log(args);

      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: playerId },
        { $set: { 'characters.$[elem].stats': args } },
        {
          arrayFilters: [{ 'elem.name': { $eq: 'newName' } }], // this is where I would put character id for context
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
    createSavingThrows: async (parent, args, context) => {
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { 'characters.$[elem].savingThrows': args } },
        {
          arrayFilters: [{ 'elem.name': { $eq: 'newName' } }], //this is where I would put character id for context
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
    createBattle: async (parent, args, context) => {
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { 'characters.$[elem].battles': args } },
        {
          arrayFilters: [{ 'elem.name': { $eq: 'newName' } }], //this is where I would put character id for context
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
    createProficiencies: async (parent, args, context) => {
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { 'characters.$[elem].proficiencies': args } },
        {
          arrayFilters: [{ 'elem.name': { $eq: 'newName' } }], //this is where I would put character id for context
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
    createPersonality: async (parent, args, context) => {
      const updatedPlayer = await Player.findByIdAndUpdate(
        { _id: '642f63da4337994f61b76313' },
        { $push: { 'characters.$[elem].personality': args } },
        {
          arrayFilters: [{ 'elem.name': { $eq: 'newName' } }], //this is where I would put character id for context
          new: true,
          runValidators: true,
        },
      );

      return updatedPlayer;
    },
    createSpells: async (parent, args, context) => {
      const updatedPlayer = await Player.findByIdAndUpdate(
        //could I push the args from the api?
        //I could potentially just put in every fucking spell ...
        //then I could push all the data into an obj and update it that way? 
        //This is still TBD
      );

      return updatedPlayer;
    },
  },
};

module.exports = resolvers;
