const Arcade = require('./src/model/Arcade');

const options = {
    display: {
        width: 320,
        height: 512,
        dpi: 16,
        dotColor: '#f00'
    },
    keyboard: {},
    mouse: {},
    controller: {}
}

const arcade = new Arcade(options);

arcade.power();

module.exports = arcade;