const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body>");
        res.write("<h1>Hello</h1>");
        res.write('<form action="/create-user" method="POST"><input name="username" type="text"><button type"submit">Send</button></form>');
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if(url === "/users") {
        res.write("<body>");
        res.write("</html>");
        res.write("<ul><li>User 1</li></ul>");
        res.write("<ul><li>User 2</li></ul>");
        res.write("<ul><li>User 3</li></ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if(url === "/create-user" && method === "POST") {
        const body = [];
        req.on("data", (chunk) =>{
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            console.log(username);
        });
         res.statusCode = 302;
         res.setHeader("Location", "/")
         return res.end();

        
    }
}

exports.handler = requestHandler;