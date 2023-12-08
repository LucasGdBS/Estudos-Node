// Módulo de referencia para criar uma API REST com o Express

const express = require('express');

const app = express();

// Método get da API no Express que retorna HTML
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Welcome to our home page</h1>');
});

// Método get da API no Express que retorna JSON
app.get('/users', (req, res) => {
    const users = {
        'users': [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ]
    };

    res.status(200).json(users);
});

// Definindo a porta do servidor
const port = 8080;

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});