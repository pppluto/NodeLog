const http = require('http');
console.log(process.argv[2]);
const server = http.createServer((request, response) => {

});
server.listen(process.argv[2]);
