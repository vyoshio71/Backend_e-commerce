const mongoose = require("mongoose");

let conn;

const connection = () => {
  if (conn) {
    return conn;
  }

  conn = mongoose.connect("mongodb://127.0.0.1:27017/local");
};

module.exports = connection;
