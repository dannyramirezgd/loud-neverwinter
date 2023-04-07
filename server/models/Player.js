const { Schema, model } = require('mongoose');
const characterSchema = require('./Character');
const bcrypt = require('bcrypt');

const playerSchema = new Schema(
  {
    playerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address'],
    },
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 6,
    // },
    // characters: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Character',
    //   },
    // ],
    characters: [characterSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

playerSchema.virtual('charactersList').get(function () {
  return this.characters;
});

const Player = model('Player', playerSchema);

module.exports = Player;
