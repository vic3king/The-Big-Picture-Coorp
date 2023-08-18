const Queue = require('bull');
const dotenv = require('dotenv');

dotenv.config();

const imageQueue = new Queue('imageQueue');

module.exports = imageQueue;
