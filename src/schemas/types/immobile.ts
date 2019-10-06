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

export const ImmobileType = new GraphQLObjectType({
  name: 'Immobile',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
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
  }),
});

export const ImmobileInputType = new GraphQLInputObjectType({
  name: 'ImmobileInput',
  fields: (): any => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    place: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    owner: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
