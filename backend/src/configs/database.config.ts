import { Client } from 'pg';
require('dotenv').config();// load the environment variables from the .env file

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432; // 5432 is the default PostgreSQL port

export const client = new Client({
  host: process.env.DB_HOST,
  port: port,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const dbConnect = () => {
    client.connect()
        .then(() => console.log('Connected to PostgreSQL successfully'))
        .catch((error: Error) => console.error('Error connecting to PostgreSQL', error));
}
