# Estudos Node.js

## Como funciona o node.js?

- O node.js é um interpretador de javascript que roda no servidor, ou seja, ele permite que o javascript seja executado fora do navegador.
- O node.js é baseado no motor de javascript do google chrome, o V8.
- O node.js é single-thread, ou seja, ele executa uma tarefa por vez.
  - O node.js é assíncrono, ou seja, ele não espera uma tarefa terminar para executar outra.
  - O node.js é não bloqueante, ou seja, ele não bloqueia a execução de uma tarefa para executar outra.
  - Imagine como se ele fosse um garçom. Ele anota o pedido de um cliente, leva para a cozinha, e enquanto o pedido está sendo preparado, ele atende outro cliente.
- O node.js é orientado a eventos, ou seja, ele executa uma tarefa quando um evento acontece.
  - Imagine como se ele fosse um garçom. Ele anota o pedido de um cliente, leva para a cozinha, e quando o pedido está pronto, ele serve o cliente.

## Vantagens do node.js

- O node.js é rápido, pois ele é baseado no motor de javascript do google chrome, o V8.
- Ótimo uso de memória (baixo custo)
- Harmonia com o front-end que também é javascript
- Muito utilizado em aplicações real-time (chat, jogos, etc)
- Presença forte no mercado

## Módulos do node.js

- O node.js possui um conjunto de módulos nativos que podem ser utilizados em qualquer aplicação.
- Podemos criar nossos próprios módulos e importá-los em nossas aplicações.
- Para utilizar um módulo, basta utilizar a função `require()` passando o nome do módulo como parâmetro.
- Exemplo de importação de um modulo nativo: `const path = require('path')`
- Exemplo de importação de um módulo criado por nós: `const meuModulo = require('./meuModulo')`

## NPM - Node Package Manager

- O NPM é um gerenciador de pacotes do node.js
- Funcionando semelhando ao pip do python, o NPM permite que instalemos pacotes de terceiros em nossas aplicações.
- Para instalar um pacote, basta executar o comando `npm install nome_do_pacote`
- Para desinstalar um pacote, basta executar o comando `npm uninstall nome_do_pacote`
- Para instalar um pacote globalmente, basta executar o comando `npm install -g nome_do_pacote`
- Para desinstalar um pacote globalmente, basta executar o comando `npm uninstall -g nome_do_pacote`
- Para instalar um pacote como dependência de desenvolvimento, basta executar o comando `npm install --save-dev nome_do_pacote`
- Para desinstalar um pacote como dependência de desenvolvimento, basta executar o comando `npm uninstall --save-dev nome_do_pacote`
- Para instalar um pacote como dependência de produção, basta executar o comando `npm install --save nome_do_pacote`
- Para desinstalar um pacote como dependência de produção, basta executar o comando `npm uninstall --save nome_do_pacote`
- Para instalar todas as dependências de um projeto, basta executar o comando `npm install`
- Todos os pacotes instalados ficam armazenados na pasta `node_modules`
- Um arquivo chamado `package.json` é criado para armazenar as informações do projeto e as dependências instaladas. (como o arquivo `requirements.txt` do python)
- Para inicializar um projeto node.js basta executar os comandos:

```bash
npm init // para criar o arquivo package.json
npm install express // para instalar o pacote express localmente
npm install -g nodemon // para instalar o pacote nodemon globalmente
```
