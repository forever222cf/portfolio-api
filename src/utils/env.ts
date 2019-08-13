import { cleanEnv, port, str, num } from 'envalid';

const { version } = require('./../../package.json');
const apiVersion = +version.split('.').shift();

export default cleanEnv(process.env, {
  NODE_ENV: str({
    default: 'development'
  }),
  PORT: port({ default: 3000 }),
  HOST_NAME: str({ default: `http://localhost:${this.PORT}` }),
  API_VERSION: num({ default: apiVersion }),
  MONGODB_URI: str({ default: 'mongodb://localhost/portfolio' })
})
