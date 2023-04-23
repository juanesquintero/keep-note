import * as dotenv from 'dotenv';
// import database from './database.config';

dotenv.config();

export default () => ({
  port: parseInt(process.env.KN_API_PORT || '3000', 10),
  prefix: 'api',
  // db: database,
});

