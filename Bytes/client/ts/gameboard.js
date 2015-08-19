var Bytes;
(function (Bytes) {
    var Client;
    (function (Client) {
        var GameBoard = (function () {
            function GameBoard() {
                this.backgroundColor = "#000A1F";
                this.gridColor = "#001F5C";
                this.blockSize = 8;
            }
            GameBoard.prototype.init = function () {
                // this.backgroundColor = board.backgroundColor;
                this.height = Bytes.Game.height / this.blockSize;
                this.width = Bytes.Game.width / this.blockSize;
                this.grid = new Array(this.width);
                for (var i = 0, ii = this.width; i != ii; ++i) {
                    this.grid[i] = new Array(this.height);
                }
            };
            GameBoard.prototype.update = function (board) {
                var adapter = {
                    backgroundColor: null,
                    gridColor: null,
                    blockSize: null,
                    height: null,
                    width: null
                };
                // Update properties
                for (var i in adapter) {
                    board.hasOwnProperty(i) && (this[i] = board[i]);
                }
                // Update grid
                for (var x = 0, xx = board.grid.length; x != xx; ++x) {
                    for (var y = 0, yy = board.grid[x].length; y != yy; ++y) {
                        var object = board.grid[x][y];
                        if (object.updated) {
                            this.grid[x][y] = object;
                            this.grid[x][y].updated = false;
                        }
                    }
                }
            };
            GameBoard.prototype.draw = function () {
                Client.Canvas.fill(this.backgroundColor);
                var size = this.blockSize;
                for (var cx = 0; cx < this.width; cx++) {
                    for (var cy = 0; cy < this.height; cy++) {
                        // Canvas.drawRect(cx * size, cy * size, size, size, GameBoard.gridColor);
                        if (this.grid[cx][cy]) {
                            this.grid[cx][cy].draw();
                        }
                    }
                }
            };
            return GameBoard;
        })();
        Client.GameBoard = GameBoard;
    })(Client = Bytes.Client || (Bytes.Client = {}));
})(Bytes || (Bytes = {}));
//# sourceMappingURL=gameboard.js.map