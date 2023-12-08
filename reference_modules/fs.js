// Arquivo de referência para o módulo fs

const fs = require('fs');
const path = require('path');

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Pasta criada com sucesso...');
});

// Criar e escrever em um arquivo
fs.writeFile(path.join(__dirname, '/test', "teste.txt"), 'Olá mundo!', err => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso...');
});

// Adicionar conteúdo em um arquivo
fs.appendFile(path.join(__dirname, '/test', "teste.txt"), ' Adicionando conteúdo', err => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso...');
});

// Ler um arquivo
fs.readFile(path.join(__dirname, '/test', "teste.txt"), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
