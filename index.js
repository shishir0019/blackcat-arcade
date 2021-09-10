const Arcade = require('./src/model/Arcade');
const Board = require('./src/model/Board');
const Display = require('./src/model/Display');
const Controller = require('./src/model/Controller');
const Keyboard = require('./src/model/Keyboard');
const Mouse = require('./src/model/Mouse');

const arcade = new Arcade();

const board = arcade.board;
const display = arcade.display;
const controller = arcade.controller;
const keyboard = arcade.keyboard;
const mouse = arcade.mouse;

board.connectDisplay(display);
board.connectController(controller);
board.connectKeyboard(keyboard);
board.connectMouse(mouse);

arcade.power();

module.exports = arcade;