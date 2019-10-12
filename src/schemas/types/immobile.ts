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

import { PhotoType } from './photo'
import photoController from '../../controller/photoController'

export const ImmobileType = new GraphQLObjectType({
  name: 'Immobile',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
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
    photos: {
      type: new GraphQLList(PhotoType),
      resolve(parentValue) {
        return photoController.find(parentValue.id);
      },
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
