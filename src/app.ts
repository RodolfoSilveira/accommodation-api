import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schemas';

class App {
  public express: express.Application

  public constructor() {
    this.express = express();
    this.middlewares();
    this.serve();
  }

  private middlewares(): void {
    this.express.use('/graphql', graphqlHTTP({schema, graphiql: true}));
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cors());
  }

  private serve():void {
    this.express.listen(process.env.PORT, (): void => {
      console.log('API ON');
    });
  }
}

export default new App().express;
