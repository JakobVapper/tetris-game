class GameBoard {
    
    state = [];
    gameBoardTable = document.getElementById('gameboard');
    boardSizeX;
    boardSizeY;
    currentBlock;

    constructor ( boardSizeX, boardSizeY ) {

        this.boardSizeX = boardSizeX;
        this.boardSizeY = boardSizeY;

        for ( let y = 0; y < this.boardSizeY; y++ ) {
            let arr = [];
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                arr.push('');
            }
            this.state.push(arr);
        }

        document.addEventListener ('keydown', e => {
            switch ( e.key ) {
                // case 'ArrowUp':
                //     direction = 'u';
                //     break;
                // case 'ArrowDown':
                //     direction = 'd';
                //     break;
                case 'ArrowLeft':
                    this.currentBlock.moveLeft();
                    this.draw();
                    break;
                case 'ArrowRight':
                    this.currentBlock.moveRight();
                    this.draw();
                    break;
            }
        });
    }

    draw() {

        this.gameBoardTable.innerHTML = '';
        
        for ( let y = 0; y < this.boardSizeY; y++ ) {
            const boardRowTr = document.createElement('tr');
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                const boardCellTd = document.createElement('td');
                const id = y + '_' + x;
                boardCellTd.setAttribute('id', id);

                // draw block
                if ( this.currentBlock.isOverlapingCell(id) ) {
                    boardCellTd.classList.add(this.currentBlock.class);
                }

                // draw colors

                if ( this.state[y][x] != '' ) {
                    boardCellTd.classList.add(this.state[y][x]);
                }


                boardRowTr.append(boardCellTd);
            }
            this.gameBoardTable.append(boardRowTr);
        }
    
        // scoreDiv.innerText = 'Score: ' + score;
    }

    getState () {
        return this.state;
    }

    addNewBlock( block ) {
        this.currentBlock = block;
    }

    addBlockToState ( block ) {

        const coordinates = block.getCoordinates();
        coordinates.forEach( el => {
            this.state[el[1]][el[0]] = block.class;
        });

        console.log(this.state);


    }
}

export { GameBoard }