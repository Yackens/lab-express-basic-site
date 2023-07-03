const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/home', (request, response) => response.sendFile(__dirname + '/views/home.html'));
app.get('/gallery', (request, response) => response.sendFile(__dirname + '/views/gallery.html'));
app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));

app.listen(port, () => console.log(`My first app listening on port ${port}!`));
