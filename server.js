const compression = require('compression');
const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const hobbiesController = require('./src/controllers/hobbies.controller');

// Create express app
const app = express();

// Set up development environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Running in development mode');
  dotenv.config();
  app.use(morgan('dev'));
} else {
  console.log('Running in production mode');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(compression());
app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/hobbies', hobbiesController.get);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on ${process.env.PORT || 5000}`);
});
