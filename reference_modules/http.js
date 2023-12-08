// Modulo de referencia para o módulo http

const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our home page</h1>');
    }

    if (req.url === '/users'){
        
        const users = {'users':[
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ]};
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));

    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});