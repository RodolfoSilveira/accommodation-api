import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const ImmobileType = new GraphQLObjectType({
  name: 'Immobile',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    place: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    owner: {
      type: GraphQLString,
    },
    imagemId: {
      type: GraphQLInt,
    },
  }),
});

export default ImmobileType;
