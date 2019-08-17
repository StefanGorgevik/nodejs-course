const http = require("http");

const routes = require("./routes")

const server = http.createServer(routes.handler);

server.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully");
})