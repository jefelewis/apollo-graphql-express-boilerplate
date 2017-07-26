import mongoose from 'mongoose';

import Song from './song';

const Schema = mongoose.Schema;

const LyricSchema = new Schema({
  likes: { type: Number, default: 0 },
  content: { type: String },
  song: {
    type: Schema.Types.ObjectId,
    ref: 'song',
  },
});

LyricSchema.statics.like = function (id) {
  return this.findById(id)
    .then(lyric => {
      ++lyric.likes;
      return lyric.save();
    });
};

LyricSchema.statics.findSong = function (id) {
  return this.findById(id)
    .populate()
    .then(lyric => {
      Song.find(lyric.song);
    });
};

const Lyric = mongoose.model('lyric', LyricSchema);

export default Lyric;
