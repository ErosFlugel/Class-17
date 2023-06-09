//Requesting Libraries
const express = require('express');
const path = require('path');
const app = express();
const mainRoute = require('./routes/mainRoute.js');


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../views'));

app.use(express.static('public'));


app.use(mainRoute);