const express = require('express');
const path = require('path');
const termData = require('./terms.json');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serving up static html pages
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Switching to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// serving up json data
app.get('/terms', (req, res) => res.json(termData));

app.get('*', (req, res) =>
  res.send(
    `<p>Bad request. Sorry try a different route</p>`
  )
);

// app listening
app.listen(PORT, () =>
  console.log(`App listening on ${PORT}`)
);
