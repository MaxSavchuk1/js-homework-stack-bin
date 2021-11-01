'use strict';

class Node {
  constructor (data, next) {
    this._data = data;
    this._next = next;
  }
}

export default class Stack {
  constructor (maxSize = 99) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }
  push (value) {
    if (this._size === this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  pop () {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }
  }
  get peek () {
    return this._top?._data;
  }
  get isEmpty () {
    return this._size === 0;
  }
}
