class Display {
    constructor(options = { width: 320, height: 640 }) {
        this.options = options;
    }

    get context() {
        return this.rootElement.getContext('2d');
    }

    get canvas() {
        try {
            if (!this.rootElement) throw new Error('You must on display or checkout root Element.');
            return this.rootElement;
        } catch (error) {
            console.log(error.message);
            return document.createElement('div');
        }
    }

    get height() {
        return this.canvas.height;
    }
    get width() {
        return this.canvas.width;
    }

    on() {
        this.rootElement = document.createElement('canvas');
        this.rootElement.width = this.options.width;
        this.rootElement.height = this.options.height;
        this.rootElement.style.backgroundColor = this.options.backgroundColor || '#000';
    }

    draw(data) {
        const isLight = (x, y) => {
            this.context.fillStyle = this.options.dotColor;
            this.context.fillRect(x, y, this.options.dpi, this.options.dpi);
        }

        const refreshScreen = () => {
            this.context.clearRect(0, 0, this.options.width, this.options.height);
            const draw = ({ x, y, obj }) => {
                for (let indexY = 0; indexY < obj.length; indexY++) {
                    const item = obj[indexY];
                    for (let indexX = 0; indexX < item.length; indexX++) {
                        const i = item[indexX];
                        isLight(x, y);
                        x += this.options.dpi
                    }
                }
            }
            for (let index = 0; index < data.length; index++) {
                const item = data[index];
                draw({x: item.position.x, y: item.position.y, obj: item.carecter});
            }
            requestAnimationFrame(refreshScreen);
        };

        refreshScreen();
    }

    render(data) {
        this.draw(data);
    }
}

module.exports = Display;