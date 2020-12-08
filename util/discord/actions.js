var fileHandler = require("../file-handler.js");
module.exports = class Actions {
  constructor() {
    this.fileHandler = new fileHandler();
  }

  getItemFromArray(itemName, callback) {
    this.fileHandler.readEmergisFileArray(
      "assets/" + itemName + ".json",
      itemName,
      (dataArray) => {
        callback(this.getRandomItemFromArray(dataArray));
      }
    );
  }

  addToItems(itemName, itemToAdd, callback) {
    this.fileHandler.writeEmergisFile(
      "assets/" + itemName + ".json",
      itemName,
      itemToAdd.replaceAll(',', ' '),
      callback
    );
  }

  joke(callback) {
    this.getItemFromArray("jokes", callback);
  }

  funFact(callback) {
    this.getItemFromArray("fun-facts", callback);
  }

  pickupLine(callback) {
    this.getItemFromArray("pickup-lines", callback);
  }

  random(callback) {
    this.getItemFromArray("random", callback);
  }

  addRandom(fact, callback) {
    this.addToItems("random", fact, callback);
  }

  addJoke(joke, callback) {
    this.addToItems("jokes", joke, callback);
  }

  addFunFact(fact, callback) {
    this.addToItems("fun-facts", fact, callback);
  }

  addPickupLine(pickupLine, callback) {
    this.addToItems("pickup-lines", pickupLine, callback);
  }

  getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
};
