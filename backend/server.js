const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const ServiceRoutes = require('./routes/service');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/',ServiceRoutes);

app.post('/api/posts',ServiceRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})