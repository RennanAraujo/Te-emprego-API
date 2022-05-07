import express from 'express';
const app = express();

app.use('/', (req, res) => {
  res.send('hello, world!');
});

app.listen(4000, err => {
  if (err) {
    return console.log('error');
  }
  console.log('started at http://localhost:4000');
});
