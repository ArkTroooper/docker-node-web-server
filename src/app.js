const http =  require('http');
const os = require('os');
const host = 'localhost';
const port = 8000;
console.log("kubia server starting...");
var handler = function(request, response){
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("you've hit "+ os.hostname()+"\n");
};

var www = http.createServer(handler);
www.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});