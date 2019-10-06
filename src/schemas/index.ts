import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import { ImmobileType, ImmobileInputType } from './types/immobile';
import PhotoType from './types/photo';
import immobileController from '../controller/immobileController';

const Schemas = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      immobiles: {
        type: new GraphQLList(ImmobileType),
        resolve() {
          return immobileController.index();
        },
      },
      immobile: {
        type: ImmobileType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
        resolve(parentValue, args) {
          return immobileController.show(args);
        },
      },
      photos: {
        type: new GraphQLList(PhotoType),
      },
      photo: {
        type: PhotoType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'MutationType',
    fields: {
      addImmobile: {
        type: ImmobileType,
        args: {
          input: {
            type: new GraphQLNonNull(ImmobileInputType),
          },
        },
        resolve(parentValue, { input }) {
          return immobileController.store(input);
        },
      },
    },
  }),
});

export default Schemas;
