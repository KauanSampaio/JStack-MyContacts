const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware do express que permite pegar as informações do body
app.use(routes);

app.listen(4000, () => console.log("Server started at http://localhost:4000/"));
