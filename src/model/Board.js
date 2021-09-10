class Board {
    constructor() { }

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
}

module.exports = Board;