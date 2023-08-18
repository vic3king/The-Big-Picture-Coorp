# The Big Picture Corp

The Big Picture Corp Image Downloader, a simple cli tool that enables us download images from valid urls

## Requirements and Installation

**Download folder**

```
This project needs redis to execute its bull queue system which I used for batching to make process more efficient and fail proof, So make sure to have that running first
quickest way would be to run this docker command

# docker run -p 6379:6379 -it redis/redis-stack-server:latest

# Switch to directory
cd image-downloader folder

# Install Package dependencies
npm install

# Install CLI 
npm install -g

# Run command
image-downloader -f images.txt -d downloads
-f and -d can also be file paths to wherever you want to read and write to

# See more options
image-downloader -h
```

## Testing

```
$ npm run test
```
## NPM
 we can decide to publish this package for public use
 - npm login
 - npm publish
  
## Technologies

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Redis](https://redis.io/) The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.
- [fs module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)The Node.js file system module allows you to work with the file system on your computer 
- [bull](https://github.com/OptimalBits/bull) The fastest, most reliable, Redis-based queue for Node.
- [Jest](https://jestjs.io/)Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Joi](https://www.npmjs.com/package/joi)The most powerful schema description language and data validator for JavaScript.
  
#### Linter(s)

- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Prettier](https://prettier.io) Prettier is an opinionated code formatter with support for Javascript

## Authors

- **Akaniru Victory** - _Initial work_ - [Vic3King](www.akaniruvictory.com)
