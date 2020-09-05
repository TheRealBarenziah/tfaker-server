var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var baseDirectory = __dirname;

// is there any PORT environment variable that is also a valid integer? Use that. Else use 9615
var port = ( process.env.PORT && !isNaN(parseInt( process.env.PORT, 10))) ? process.env.PORT : 9615;

http.createServer(function (request, response) {
  try {
    var requestUrl = url.parse(request.url);

    // Did you just request root? Guess you actually expected /index.html. Else nevermind
    requestUrl.pathname === "/" ? requestUrl.pathname = "/index.html" : null;

    // need to use path.normalize so people can't access directories underneath baseDirectory
    var fsPath = baseDirectory + path.normalize(requestUrl.pathname);

    // create stream of matching file
    var fileStream = fs.createReadStream(fsPath);

    fileStream.pipe(response);
    fileStream.on('open', function () {
      response.writeHead(200);
    });
    fileStream.on('error', function (e) {
      response.writeHead(404);
      response.end();
    });
  } catch (e) {
    response.writeHead(500);
    response.end();
    console.error(e.stack);
  };
}).listen(port);

console.log("Listening on port " + port);
