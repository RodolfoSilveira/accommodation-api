import config from '../knexfile';
import knex from 'knex';

const db = knex(config);
export default db;
