const http = require ("http")
const port = 8900

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Oshe Sani");

})

server.listen(port, function(error) {
    if(error) {
        console.log ("oops something went wrong",error)
    } else{
        console.log("Server is listening on port" + port )
    }

})