const rtsIndex = require('./index.routes');
const express = require('express')
const app = express()
const bodyParser = require('body-parser'),
      cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', rtsIndex);

const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })