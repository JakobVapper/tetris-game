import { GameBoard } from "./src/GameBoard.js";
import { OBlock } from "./src/OBlock.js";

// const messageDiv = document.getElementById('message');
// const scoreDiv = document.getElementById('score');
// const resetBtn = document.getElementById('reset');

let timeoutID, speed;

const boardSizeX = 14;
const boardSizeY = 16;

function initGame () {
    clearTimeout(timeoutID);
    timeoutID = null;

    speed = 500;

    const gameBoard = new GameBoard(boardSizeX, boardSizeY);
    let oBlock = new OBlock(boardSizeX, boardSizeY); 
    gameBoard.addNewBlock(oBlock);
    gameBoard.draw();

    (function repeat() {
        timeoutID = setTimeout(repeat, speed);
        if (oBlock.canGoDown(gameBoard.getState())) {
            oBlock.moveDown();
        } else {
            if (!oBlock.getIsStopped()) {
                gameBoard.addBlockToState(oBlock);
                oBlock.stop();
                oBlock = new OBlock(boardSizeX, boardSizeY); 
                gameBoard.addNewBlock(oBlock);
            }
        }
        gameBoard.draw();
    })();
}

initGame();