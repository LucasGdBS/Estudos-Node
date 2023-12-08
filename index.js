const connectToDatabase = require('./src/database/connect');
const dotenv = require('dotenv');
const express = require('express');
const UserModel = require('./src/models/user.model');

dotenv.config();

// Define o app como uma instância do express (feito no fastAPI)
const app = express();

// Define que o app vai usar o formato json
app.use(express.json());

// Define que o app vai sempre vai fazer isso antes de qualquer requisição
app.use((req, res, next) => {
    console.log(`Método de request: ${req.method}`)
    console.log(`URL de request: ${req.url}`)
    console.log(`Tipo de request: ${req.headers['content-type']}`)
    console.log(`Body de request: ${JSON.stringify(req.body)}`)
    console.log(`Resposta enviada: ${res.statusCode}`)
    console.log(`------------------`)
    next();
})

// Conexão com o banco de dados
connectToDatabase();

// Endpoints da API (assim como no FastAPI)
// Lembrando que: async = diz que a função é assíncrona
//                await = diz que a função deve esperar a resposta da função assíncrona

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!user) {
            return res.status(404).send('User not found')
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send('User not found')
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Define a porta que o app vai rodar
const port = 8080;

// Faz o app "escutar" a porta definida, ou seja, bota pra rodar
app.listen(port, () => console.log(`Server listening on port ${port}`));


