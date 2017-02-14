const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(require('./resources'));

app.listen(PORT, () => { console.log('Listening on', PORT)});
