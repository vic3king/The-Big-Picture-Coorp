const Queue = require('bull');
const dotenv = require('dotenv');

dotenv.config();

const { REDIS_URL } = process.env;

const imageQueue = new Queue('imageQueue', REDIS_URL);

module.exports = imageQueue;
