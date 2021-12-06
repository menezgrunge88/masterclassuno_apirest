const mgdb = require("mongoose");
mgdb.connect("mongodb://127.0.0.1:27017/masterclassuno", (err, db) => {
  if (err) throw err;
  console.log("Success!!! Database connected!");
});
module.exports = mgdb;
