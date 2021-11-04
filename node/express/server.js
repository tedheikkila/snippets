const express = require('express');
const path = require('path');
const termData = require('./terms.json');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = [
  {
    routeName: 'route1',
    name: 'name1'
  },
  {
    routeName: 'route2',
    name: 'name2'
  },
  {
    routeName: 'route3',
    name: 'name3'
  },
];

// serving up static html pages
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Switching to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

app.get('/add', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/add.html'))
);

app.get('/view', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/view.html'))
);

app.get('/api/posts', (req, res) => res.json(posts));

// serving up json data
app.get('/terms', (req, res) => res.json(termData));

app.get('*', (req, res) =>
  res.send(
    `<p>Bad request. Sorry try a different route</p>`
  )
);

// post
app.post('/api/posts', (req, res) => {
  const newPost = req.body;

  newPost.routeName = newPost.name.replace(/\s+/g, '').toLowerCase()
  console.log(newPost);

  posts.push(newPost);
  res.json(newPost);
});

// app listening
app.listen(PORT, () =>
  console.log(`App listening on ${PORT}`)
);
