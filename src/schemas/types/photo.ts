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

import { ImmobileType } from './immobile'
import immobileController from '../../controller/immobileController'

export const PhotoInputType = new GraphQLInputObjectType({
  name: 'PhotoInput',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
    path: {
      type: new GraphQLNonNull(GraphQLString),
    },
    immobileId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

export const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  fields: (): any => ({
    id: {
      type: GraphQLInt,
    },
    path: {
      type: new GraphQLNonNull(GraphQLString),
    },
    immobileId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    immobile: {
      type: ImmobileType,
      resolve(parentValue) {
        return immobileController.find(parentValue.immobileId);
      },
    },
  }),
});
