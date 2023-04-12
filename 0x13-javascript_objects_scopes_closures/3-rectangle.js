#!/usr/bin/node
/**
 * Checking the parameters provided
 */
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let j = 0; i < this.height; j++) {
      let myVar = '';
      let k = 0;
      while (k < this.width) {
        myVar += 'X';
        k++;
      }

      console.log(myVar);
    }
  }
}
module.exports = Rectangle;
