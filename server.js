const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static('./dist/music-hub-app'));

app.get('/*', function (req, res) {
  // res.sendFile(path.join('./dist/course-manager-client-angular/index.html'));
  res.sendFile(__dirname + '/dist/music-hub-app/index.html');
});
app.listen(process.env.PORT || 8080);
