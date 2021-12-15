const http = require("http");
const port = 3000;



function willItBlend(callback) {
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) {
    callback(null, "Good news! It Blends!");
  } else {
    callback(new Error("Oh No! It didn't Blend!"));
  }
}


const server = http.createServer(function(req, res) {
    willItBlend(function(err, result) {
       if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            return res.write(err.message);;
       } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(result);
       }
    })
    res.end();
});


server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    };
});
