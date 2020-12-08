module.exports = class FileHandler {
  constructor() {
    this.fs = require("fs");
  }

  readFile(path, callback) {
    this.fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }

      callback(data);
    });
  }

  readEmergisFileArray(path, id, callback) {
    this.fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      callback(JSON.parse(data)[id]);
    });
  }

  writeEmergisFile(path, id, itemToAdd, callback) {
    this.readFile(path, (data) => {
      var array = JSON.parse(data)[id];
      array.push(itemToAdd);
      array.forEach((item) => {
        item = "'" + item + "'";
      });
      var jsonObject = {};
      jsonObject[id] = array;
      this.fs.writeFile(path, JSON.stringify(jsonObject), function (err) {
        if (err) {
          callback("could not add:'" + itemToAdd + "'");
        } else {
          callback("added item successfully");
        }
      });
    });
  }
};
