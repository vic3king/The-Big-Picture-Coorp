import Queue from 'bull';

const imageQueue = new Queue('imageQueue');

export default imageQueue;
