const express = require('express');
const app = express();
const port = 9000;


app.use(express.json());
 
const items  = require('./Route/route');

app.use('/item',items);

app.get('/',(req,res) => {
    res.send('Back There !!!!');
    console.log(req.body);
});

app.listen(port,() => {
    console.log(`Villen listening on port ${port}
    `)
});