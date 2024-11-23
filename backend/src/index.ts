import express from 'express';

const expressApp = express();

expressApp.listen(3000, () => {
  console.info('Listineng at https://localhost:3000')
});

expressApp.get('/ping', (req, res) => {
  res.send('pong');
});
