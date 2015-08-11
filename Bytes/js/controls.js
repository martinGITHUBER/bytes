var Bytes;
(function (Bytes) {
    var Buttons = (function () {
        function Buttons() {
        }
        Buttons.init = function () {
            Buttons.play = document.querySelector("#play");
            Buttons.pause = document.querySelector("#pause");
            Buttons.reset = document.querySelector("#reset");
            Buttons.play.onclick = Controls.onClickPlay;
            Buttons.pause.onclick = Controls.onClickPause;
            Buttons.reset.onclick = Controls.onClickReset;
        };
        return Buttons;
    })();
    Bytes.Buttons = Buttons;
    var GUI = (function () {
        function GUI() {
        }
        GUI.init = function () {
            GUI.header = document.querySelector("header");
            GUI.lives = document.querySelector("#lives");
        };
        GUI.draw = function () {
            GUI.lives.innerText = Bytes.Game.isRunning
                ? "Lives: " + Bytes.Game.player1.lives
                : "Press Start";
        };
        return GUI;
    })();
    Bytes.GUI = GUI;
    var Controls = (function () {
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
            Bytes.Game.pause();
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
                }
                Controls.lastKeyPressed = null;
            }
        };
        Controls.lastKeyPressed = null;
        return Controls;
    })();
    Bytes.Controls = Controls;
})(Bytes || (Bytes = {}));
//# sourceMappingURL=controls.js.map