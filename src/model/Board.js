class Board {
    constructor() {
        this.game = null;
    }

    connectDisplay(display) {
        this.display = display;
    }

    connectController(controller) {
        this.controller = controller;
    }

    connectKeyboard(keyboard) {
        this.keyboard = keyboard;
    }

    connectMouse(mouse) {
        this.mouse = mouse;
    }

    load(game) {
        this.game = game;
        this.keyboard.game = this.game;
        this.controller.game = this.game;
        this.mouse.game = this.game;

        this.keyboard.left = this.game.keyboard.left;
        this.keyboard.right = this.game.keyboard.right;
        this.keyboard.up = this.game.keyboard.up;
        this.keyboard.down = this.game.keyboard.down;
    }

    run() {
        // console.log(this.game.data);
        this.display.render(this.game.data);
    }
}

module.exports = Board;