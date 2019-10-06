import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
    path: {
      type: new GraphQLNonNull(GraphQLString),
    },
    immobileId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export default PhotoType;
