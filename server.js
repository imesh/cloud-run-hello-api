const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Incoming request: ' + req.url);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 'hello': 'api' }));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => { console.log('Listening on port ' + PORT);});
