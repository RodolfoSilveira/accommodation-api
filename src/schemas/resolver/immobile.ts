import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import ImmobileType from '../types/immobile';

const immobileSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      immobiles: {
        type: new GraphQLList(ImmobileType),
      },
      immobile: {
        type: ImmobileType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
      },
    },
  }),
});

export default immobileSchema;
