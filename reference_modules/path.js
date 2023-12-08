// Arquivo de referência para o módulo path

const path = require('path')

// Nome do arquivo atual
console.log(path.basename(__filename))

// Nome do diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo atual
console.log(path.extname(__filename))

// Objeto com informações do arquivo atual
console.log(path.parse(__filename))

// Concatenação de diretórios
console.log(path.join(__dirname, 'test', 'hello.html'))