class OBlock {

    boardSizeX;
    boardSizeY;

    width = 2;
    height = 2;

    positionX;
    positionY = -2;

    isStopped = false;

    class = 'o-block';

    shape = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];


    constructor ( boardSizeX, boardSizeY ) {
        this.boardSizeX = boardSizeX;
        this.boardSizeY = boardSizeY;
    
        
        this.positionX = Math.floor(this.boardSizeX / 2) - 1;
    }

    isOverlapingCell ( id ) {
        let res = false;

        this.shape.forEach( el => {
            if ( id == (el[0] + this.positionY) + '_' + (el[1] + this.positionX) ) {
                res = true;
            }
        });

        return res;
    }

    getCoordinates () {
        return this.shape.map( x => {
            return [x[0] + this.positionX, x[1] + this.positionY];
        });
    }

    canGoDown ( state ) {
        if ( (this.positionY + this.height) < this.boardSizeY ) {
            for (let i = 0; i < this.width; i++) {
                if (state[this.positionY + this.height][this.positionX + i] !== '') {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    getIsStopped () {
        return this.isStopped;
    }

    stop () {
        this.isStopped = true;
    }

    moveDown () {
        this.positionY++;
    }

    moveLeft () {
        if ( this.positionX > 0 ) {
            this.positionX--;
        }
    }

    moveRight () {
        if ( this.positionX < (this.boardSizeX - this.width) ) {
            this.positionX++;
        }
    }

}

export { OBlock }