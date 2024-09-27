// app.js
const express = require('express');
const app = express();
const port = 3000;

//Route GET
// app.get('/', (req, res)=>{
//     res.send('Hello,GET request');
// })

//MiddLeware untuk parsing body request
app.use(express.json());

//Route POST
app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Surver running at http://localhost:3000/');
});

app.get('/text', (req, res) => {
    res.send('Ini adalah response text.');
});

app.get('/html', (req, res) => {
    res.send('<h1>Ini adalah response HTML</h1>');
});

app.get('/json', (req, res) => {
    res.json({ message: 'Ini adalah response JSON'});
});