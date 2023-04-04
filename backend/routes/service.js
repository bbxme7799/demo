const path = require('path');
const express = require('express');

// const rootDir = require('../util/path');

//MVC
const ServiceController = require('../controllers/service');

const router = express.Router();

// /admin/add-product => GET
router.get('/', ServiceController.getService);
router.post('/api/posts', ServiceController.postService);
 
module.exports = router;