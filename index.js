const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola desde tu app Node.js en Docker\n');
});

 server.listen(port, () => {
   console.log(`Servidor corriendo en http://localhost:${port}/`);

});
