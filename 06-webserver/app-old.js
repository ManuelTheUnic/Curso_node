
const http = require('http');

http.createServer( ( request, response )=> {

    response.write('hola mundo');
    response.end();

})

.listen(2222);

console.log('escuchando el puerto', 2222);