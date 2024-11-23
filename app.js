const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido a la página de inicio');
});

app.get('/about', (req, res) => {
  res.send('Acerca de nosotros');
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
