const express = require('express');
const app = express();
const port = 8475;

app.use(express.static('server/public'));

app.listen(port, ()=>{
    console.log('server is on:', port);
    
});