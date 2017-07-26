// resolvers defines how graphql server resolves the different requests

// This is where we are going to make requests to the DB
// If we need to query the DB for information or save
// information into the DB, we'll create a resolver based
// on the type created

import Lyric from '../models/lyric';
import Song from '../models/song';

const resolvers = {
  // Query is for all the types we want to query
  Query: {
    songs() {
      return Song.find();
    },
    song(_, args) {
      return Song.findById(args.id);
    },
    lyrics() {
      return Lyric.find();
    },
    lyric(_, args) {
      return Lyric.findById(args.id);
    },
  },
  Song: {
    lyrics(root) {
      return Song.findLyric(root);
    },
  },
  Lyric: {
    async song(root) {
      return Song.findById(root.song);
    },
  },
  Mutation: {
    async addSong(root, args) {
      return new Song(args).save();
    },
  },
};

export default resolvers;
