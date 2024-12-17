const express = require('express');

const app = express();

app.get('/',  (req, res) => {
    res.send("Bienvenido y Hola Mundo");
});

app.listen(3000);
console.log("Server corriendo en el puerto 3000");