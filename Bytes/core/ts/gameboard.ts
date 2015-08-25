﻿namespace Bytes {

    export type GameBoardGrid = number[][];

    export interface IGameBoard {

        backgroundColor: string;
        gridColor: string;

        blockSize: number;

        height: number;
        width: number;

        grid: GameBoardGrid;

        init(board: GameBoard);
        init();        
    }

    export class GameBoard implements IGameBoard {

        public backgroundColor: string = "#000A1F";
        public gridColor: string = "#001F5C";

        public blockSize = 8;

        public height;
        public width;

        public grid: GameBoardGrid;

        public placeObject(object: GameObject, position: Position) {

            this.grid[position.X][position.Y] = object.index;
            object.position = Position.copy(position);
            // object.updated = true;
        }

        public placeAtRandom(object: GameObject) {

            var position = this.generateRandomPosition();
            this.placeObject(object, position);
        };

        public moveObject(object: GameObject, newPosition: Position) {

            this.removeObjectAt(object.position);
            this.placeObject(object, newPosition);
        }

        public moveToRandom(object: GameObject) {

            var position = this.generateRandomPosition();
            this.moveObject(object, position);
        }

        public removeObjectAt(position: Position) {

            this.grid[position.X][position.Y] = null;
        }               

        public generateRandomPosition() {

            var position: Position;
            while (!position) {

                var x = Math.floor(Math.random() * this.width);
                var y = Math.floor(Math.random() * this.height);
                if (!this.grid[x][y]) {
                    return new Position(x, y);
                }
            }
        }

        public init() {

            this.height = Canvas.height / this.blockSize;
            this.width = Canvas.width / this.blockSize;

            this.grid = new Array(this.width);
            for (var i = 0, ii = this.width; i != ii; ++i) {
                this.grid[i] = new Array(this.height);
            }
        }

     
    }
}
    