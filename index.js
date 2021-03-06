const http = require('http');
const url = require('url');
const petshop = require('./petshop')

http.createServer((request, response) => {
    
    let urlCompleta = url.parse(request.url, true)
    
    switch (urlCompleta.pathname) {
        case '/':
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write('Você está na página inicial!');
        response.end();
        break;

        case '/home':
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end('Você iniciou o sistema Pet-Shop!')
        break;

        case '/pet/adicionar':
        if(petshop.adicionarPet(urlCompleta.query.nome)) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end('Pet adicionado com sucesso!');   
        } else {
            response.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            response.end('Falha ao adicionar Pet!');    
        }
        break;
    }
}).listen(3000, 'localhost');