const express = require('express');
const app = express();


// webフォルダの中身を公開する
//app.use(express.static('web'));

app.get('/', (req, res) => {
 res.send('Hello Node.js!');
});


// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

var d = { "name": "Ronald", "number": 7, "nation": "Portugal" };

var json = JSON.stringify(d);
    // JSONを送信する
    res.json(todoList);
});


app.listen(3000, () => {
   console.log("My app listening on port 3000!");
});