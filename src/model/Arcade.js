const Board = require('./Board');
const Display = require('./Display');
const Controller = require('./Controller');
const Keyboard = require('./Keyboard');
const Mouse = require('./Mouse');

class Arcade {
    constructor() {
        this.board = new Board();
        this.display = new Display();
        this.controller = new Controller();
        this.keyboard = new Keyboard();
        this.mouse = new Mouse();
    }
    power() {
        if (this.check()) {
            console.log('ready');
        } else {
            console.log('error');
        }
    }

    check(device) {
        // this.display.on();
        return true;
    }
}

module.exports = Arcade;