(function() {
    'use strict';

    function Boot() {
    }

    var Constants = {}; // todo: Edit later on...

    Boot.prototype.setScaling = function(game) {
        //Check if the device is in portrait mode, and if so, override the width with the innerHeight.
        //We want to determine the scaling based on the the biggest side.
        var width = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
        width *= game.device.pixelRatio;

        if (width < 650) {
            Constants.GAME_SCALE = 0.5;
        } else if (width > 1050) {
            Constants.GAME_SCALE = 1;
        } else {
            Constants.GAME_SCALE = 0.75;
        }
    };

    Boot.prototype.preload = function() {

        game.clearBeforeRender = false;

        // configure game
        if (game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        } else {
            game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;

            var manager = game.scale;

            var width = window.innerWidth;
            var height = window.innerHeight;

            this.setScaling(manager.game);

            var usedWidth = g_.screen.width * Constants.GAME_SCALE;
            var usedHeight = g_.screen.width * Constants.GAME_SCALE;

            var scaleFactor = 1;

             //So first we check if the game is beeing played in landscape
            if (width > height) {
                scaleFactor /= height / usedHeight;
            } else {
                scaleFactor /= height / usedWidth;
            }

            Constants.CALCULATED_WIDTH = Math.ceil(width * scaleFactor);
            Constants.CALCULATED_HEIGHT = Math.ceil(height * scaleFactor);

            manager.setGameSize(Constants.CALCULATED_WIDTH, Constants.CALCULATED_HEIGHT);
            manager.setUserScale(1 / scaleFactor, 1 / scaleFactor);

             // Load animations before game start
            game.load.json('preload-loading-icon',
                'assets/img/preload/loading-icon.json');

            game.load.json('preload-game-name',
                'assets/img/preload/game-name.json');
        }

        alert("version: 0.0.5");
    };

    Boot.prototype.create = function() {
        game.state.start('ladingScreen');
    }

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Boot = Boot;
}());
