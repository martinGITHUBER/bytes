var Bytes;
(function (Bytes) {
    var Buttons = /** @class */ (function () {
        function Buttons() {
        }
        Buttons.init = function () {
            Buttons.start = document.querySelector("#start");
            Buttons.pause = document.querySelector("#pause");
            Buttons.reset = document.querySelector("#reset");
            Buttons.start.onclick = Controls.onClickPlay;
            Buttons.pause.onclick = Controls.onClickPause;
            Buttons.reset.onclick = Controls.onClickReset;
        };
        return Buttons;
    }());
    Bytes.Buttons = Buttons;
    var GUI = /** @class */ (function () {
        function GUI() {
        }
        GUI.init = function () {
            GUI.header = document.querySelector("header");
            GUI.score = document.querySelector("#score");
            GUI.lives = document.querySelector("#lives");
            GUI.build = document.querySelector("#build");
            GUI.build.innerText = "Build: " + window['version'];
        };
        GUI.draw = function () {
            GUI.lives.innerText = Bytes.Game.isRunning
                ? "Lives: " + Bytes.Game.player1.lives
                : "Press Start";
            GUI.score.innerText = Bytes.Game.isRunning
                ? "Score: " + Bytes.Game.player1.points
                : "Hi Score: " + Bytes.Game.hiScore;
        };
        return GUI;
    }());
    Bytes.GUI = GUI;
    var Controls = /** @class */ (function () {
        function Controls() {
        }
        Controls.init = function () {
            GUI.init();
            Buttons.init();
        };
        Controls.onClickPlay = function () {
            Bytes.Game.start();
        };
        Controls.onClickPause = function () {
            Bytes.Game.togglePause();
        };
        Controls.onClickReset = function () {
            Bytes.Game.reset();
        };
        Controls.onKeyUp = function (ev) {
            Controls.lastKeyPressed = ev.keyCode;
        };
        Controls.processInput = function () {
            if (Controls.lastKeyPressed) {
                switch (Controls.lastKeyPressed) {
                    case 38:
                        if (Bytes.Game.player1.direction != Bytes.Direction.DOWN) {
                            Bytes.Game.player1.direction = Bytes.Direction.UP;
                        }
                        break;
                    case 40:
                        if (Bytes.Game.player1.direction != Bytes.Direction.UP) {
                            Bytes.Game.player1.direction = Bytes.Direction.DOWN;
                        }
                        break;
                    case 37:
                        if (Bytes.Game.player1.direction != Bytes.Direction.RIGHT) {
                            Bytes.Game.player1.direction = Bytes.Direction.LEFT;
                        }
                        break;
                    case 39:
                        if (Bytes.Game.player1.direction != Bytes.Direction.LEFT) {
                            Bytes.Game.player1.direction = Bytes.Direction.RIGHT;
                        }
                        break;
                    case 32:
                        Bytes.Game.player1.jump();
                }
                Controls.lastKeyPressed = null;
            }
        };
        Controls.lastKeyPressed = null;
        return Controls;
    }());
    Bytes.Controls = Controls;
})(Bytes || (Bytes = {}));