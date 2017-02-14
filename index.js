const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.env.PORT || 3000;

// EJS View Engine and Public Assets
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser for Form Data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Router
app.use(require('./resources'));

app.listen(PORT, () => { console.log('Listening on', PORT)});
