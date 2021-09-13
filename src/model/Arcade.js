const Board = require('./Board');
const Display = require('./Display');
const Controller = require('./Controller');
const Keyboard = require('./Keyboard');
const Mouse = require('./Mouse');

class Arcade {
    constructor(options = {}) {
        this.options = options
        this.board = new Board();
    }

    loadGame(Game) {
        this.game = new Game(this);
        if (this.game) {
            this.board.load(this.game);
            this.board.run()
        }
    }

    power() {
        this.board.connectDisplay(new Display(this.options.display));
        this.board.connectController(new Controller(this.options.controller));
        this.board.connectKeyboard(new Keyboard(this.options.keyboard));
        this.board.connectMouse(new Mouse(this.options.mouse));
        try {
            if (!this.check()) return;
            this.board.display.on();
        } catch (error) {
            console.log(error.message);
        }
    }

    get screen() {
        return this.board.display.canvas;
    }

    check() {
        try {
            if (!this.board.display) throw new Error('Display not found.');
            if (!this.board.keyboard) throw new Error('Keyboard not found.');
            if (!this.board.mouse) throw new Error('Mouse not found.');
            if (!this.board.controller) throw new Error('Controller not found.');
            return true;
        } catch (error) {
            console.log(`Arcade not ready to start [Error: ${error.message}]`);
            return false;
        }
    }
}

module.exports = Arcade;