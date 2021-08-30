const express = require('express');
const app = express();

app.use(express.static('public'));
//Home rute
app.get('/',(request,response,next) => response.sendFile(__dirname +'/views/index.html'));
app.get('/about',(request,response,next) => response.sendFile(__dirname +'/views/about.html'));
app.get('/work',(request,response,next) => response.sendFile(__dirname +'/views/works.html'));

app.listen(5400,() => console.log('my first app listening on port 5500'));