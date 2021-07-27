"use strict";

class Deactivated extends Error {
  constructor(message) {
    super(message);
    this.name = "Deactivated";
    this.id = 2;
  }
}

module.exports = Deactivated;
