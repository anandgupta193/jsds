/**
 * Class representing a stack
 */
class Stack{
    constructor() {
        this._storage = {};
    }

    /**
     * Removes the value from stach and returns it
     * @returns {*} the last and newest value it the stack
     * @memberof Stack
     */
    pop() {}

    /**
     * Adds new value to the stack
     * @param {*} value the value to push
     * @memberof Stack
     */
    push() {}

    /**
     * Returns the value at the end of the stack without removing it
     * @returns {*} the last and newest value in the stack
     * @memberof Stack
     */
    peek() {}
}

const myStack = new Stack();

console.log(myStack);