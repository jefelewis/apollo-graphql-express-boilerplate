import resolvers from './resolvers';

import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Song {
  id: ID!
  title: String!
  lyrics: [Lyric]
}
type Lyric {
  id: ID
  likes: String
  content: String
  song: Song
}
type Query {
  songs: [Song]
  song(id: String): Song
  lyrics: [Lyric]
  lyric(id: String): Lyric
}
type Mutation {
  addSong(title: String!): Song
 }
`;

// addMockFunctionsToSchema({ schema, mocks });
// Because we are not using mocks (fake data) anymore,
// we've created resolvers and we need to connect them with the types
export default makeExecutableSchema({ typeDefs, resolvers });
