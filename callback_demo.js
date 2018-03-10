const fs = require('fs');

fs.readFile('data.txt', function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    throw err;
  }
  // Otherwise, use the data
  console.log(data.toString("utf-8"));
});