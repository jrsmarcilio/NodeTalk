var express = require('express');
var routes = require('./routes');

var app = express();

app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname, 'public'));

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening in PORT ${PORT}`)
});