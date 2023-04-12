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
    for (let i = 0; i < this.height; i++) {
      let myVar = '';
      let j = 0;
      while (j < this.width) {
        myVar += 'X';
        j++;
      }

      console.log(myVar);
    }
  }

  rotate () {
    let temp = 0;
    tem = this.width;
    this.width = this.height;
    this.height = tem;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;

