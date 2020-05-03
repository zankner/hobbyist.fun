const express = require('express');
const api = require('../api');

const router = express.Router();

router.post('/hobbies', api.hobbies.create);