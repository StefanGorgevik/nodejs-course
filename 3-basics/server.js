const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(8080, (err) => {
    if(err) {
        console.log(error);
    }
    console.log("Server has started succcessfully!");
});