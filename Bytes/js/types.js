var Bytes;
(function (Bytes) {
    var GameObject = (function () {
        function GameObject() {
        }
        return GameObject;
    })();
    Bytes.GameObject = GameObject;
    var GameEvent = (function () {
        function GameEvent() {
        }
        return GameEvent;
    })();
    Bytes.GameEvent = GameEvent;
    (function (ScreenEdge) {
        ScreenEdge[ScreenEdge["NORTH"] = 0] = "NORTH";
        ScreenEdge[ScreenEdge["SOUTH"] = 1] = "SOUTH";
        ScreenEdge[ScreenEdge["EAST"] = 2] = "EAST";
        ScreenEdge[ScreenEdge["WEST"] = 3] = "WEST";
    })(Bytes.ScreenEdge || (Bytes.ScreenEdge = {}));
    var ScreenEdge = Bytes.ScreenEdge;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
        Direction[Direction["NONE"] = 4] = "NONE";
    })(Bytes.Direction || (Bytes.Direction = {}));
    var Direction = Bytes.Direction;
    var Position = (function () {
        function Position(x, y) {
            this.X = x;
            this.Y = y;
        }
        Position.copy = function (position) {
            return new Position(position.X, position.Y);
        };
        return Position;
    })();
    Bytes.Position = Position;
})(Bytes || (Bytes = {}));
//# sourceMappingURL=types.js.map