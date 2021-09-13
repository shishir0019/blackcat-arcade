class Keyboard {
    constructor() {
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp':
                    this.up && this.up();
                    break;
                case 'ArrowDown':
                    this.down && this.down();
                    break;
                case 'ArrowLeft':
                    this.left && this.left();
                    break;
                case 'ArrowRight':
                    this.right && this.right();
                    break;
                default:
                    // console.log(e.code);
                    break;
            }
        })
    }

}


module.exports = Keyboard;