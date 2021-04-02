const http = require("http");

http.createServer((req, res) => {
	res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
	res.writeHead(200, {"Content-Type": "application/json"});

	res.write("id, name\n");
	res.write("1, Uriel\n");
	res.write("2, Alexis\n");

	res.end();
}).listen(4200, "192.168.3.15");

console.log("Listening on port: 192.168.3.15:4200");
