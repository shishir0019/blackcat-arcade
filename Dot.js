class Dot {
    constructor(x = 0, y = 0) {
        this.position = { x, y }
    }

    get carecter() {
        return [
            [1]
        ]
    }
}
class Paddle {
    constructor(x = 0, y = 0) {
        this.position = { x, y }
    }

    get carecter() {
        return [
            [1, 1, 1, 1]
        ]
    }
}

class DXBall {
    constructor(arcade) {
        this.name = 'DxBall'
        this.level = 1;
        this.arcade = arcade;
        this.dot = new Dot(64, 160);
        this.paddle = new Paddle(160, this.arcade.board.display.height - 32);
        this.start();
    }

    start() {
        let dot = this.data[0];
        let paddle = this.data[1];

        let count = 20;

        let x = true;
        let y = true;

        const levelUp = () => {
            this.level += 1;
        }

        let loop = () => {
            if (x) {
                dot.position.x -= this.level;
                dot.position.x < 0 ? x = false : x = true;
            } else {
                dot.position.x += this.level;
                dot.position.x !== this.width - this.dpi
                    ? x = false
                    : x = true;
            }
            if (y) {
                dot.position.y -= this.level;
                dot.position.y < 0 ? y = false : y = true;
            } else {
                dot.position.y += this.level;
                dot.position.y < this.height - this.dpi
                    ? y = paddle.position.y - this.dpi < dot.position.y
                        ? dot.position.x > paddle.position.x - this.dpi && dot.position.x < paddle.position.x + (4 * this.dpi)
                            ? true
                            : false
                        : false
                    : y = true;
            }
            requestAnimationFrame(loop);
        }
        loop()
    }

    get data() {
        return [this.dot, this.paddle]
    }

    get display() {
        return this.arcade.board.display;
    }

    get dpi() {
        return this.display.options.dpi;
    }

    get width() {
        return this.display.options.width;
    }

    get height() {
        return this.display.options.height;
    }

    keyboard = {
        left() {
            let paddle = this.game.data[1];
            let dpi = this.game.dpi;
            if (paddle.position.x > 0) {
                paddle.position.x -= dpi;
            }
        },
        right() {
            let paddle = this.game.data[1];
            let dpi = this.game.dpi;
            let width = this.game.width;
            if (paddle.position.x < width - (4 * dpi)) {
                paddle.position.x += dpi;
            }
        }
    }
}

module.exports = DXBall;