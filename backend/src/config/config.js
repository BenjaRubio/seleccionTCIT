const dotenv = require('dotenv');
dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

const url = `postgresql://${username}:${password}@${host}:${port}/${database}`;

module.exports = {
  development: {
    url,
    dialect: "postgres",
  },
  local: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  test: {
    username,
    password,
    database: "test-db",
    host,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username,
    password,
    database: "prod-db",
    host,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
