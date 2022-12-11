const express = require('express');
const chats = require('./data/data.js');
const app = express();



const port = 3000;

app.get('/', (req, res) => {
    res.send("API is running on port 3000")
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id)
    const singelChat = chats.find((c) => c._id === req.params.id);
    res.send(singelChat);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})