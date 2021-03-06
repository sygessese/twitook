import config from '../../../src/config'

const BASE_URL = `http://${config.ipAddress}:${config.port}/`;

export default {
  BASE_URL: BASE_URL,
  THREADS_URL: BASE_URL + "api/threads/",
  THREADS_GET: "THREADS_GET",
  THREADS_ADD: "THREADS_ADD",
  THREADS_DELETE: "THREADS_DELETE",
  THREADS_UPDATE: "THREADS_UPDATE"
};
