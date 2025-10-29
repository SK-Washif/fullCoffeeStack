const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7800;

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
  res.send('server start')
});

app.listen(port, (req, res)=>{
  console.log(`The port num is ${port}`);
})