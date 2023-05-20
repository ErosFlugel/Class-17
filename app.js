//Requesting Libraries
const express = require('express');
const path = require('path');
const app = express();

//Rising up the server
app.listen(3030, console.log('Servidor corriendo en puerto 3030'));

//Assigning Public Folder
app.use(express.static(path.resolve(__dirname, './public')));

//Assigning Views
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get('/registro', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')));