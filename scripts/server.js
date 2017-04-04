var express = require('express');
// console.log(express)
var app = express();
app.use(express.static('./public_html'));

app.get('/', function (req, res) {
  res.send('Hello, you now can create cds pages. Have fun!');
})

app.listen(9000, function () {
  console.log('CDS pages builder app is listening on port 9000!');
})
