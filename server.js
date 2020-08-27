/*const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/stork'));

app.get('/*', function(req,res){
    res.sendFile('index.html', { root: 'dist/stork/'});
});

app.listen(process.env.PORT || 4200, () => {
    console.log('servidor ON en puerto 4200...');
});*/

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/stork'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/stork/index.html'));
});

app.listen(process.env.PORT || 4200, () => {
    console.log('servidor ON en puerto 4200...');
});