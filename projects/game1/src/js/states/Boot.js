(function() {
    'use strict';

    function Boot() {
    }

    Boot.prototype.preload = function() {

        // Load animations before game start
        game.load.json('preload-loading-icon',
            'assets/img/preload/loading-icon.json');

        game.load.json('preload-game-name',
            'assets/img/preload/game-name.json');

        // configure game
        if (game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        } else {
            game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            game.scale.minWidth = 480;
            game.scale.minHeight = 260;
            game.scale.maxWidth = 640;
            game.scale.maxHeight = 480;
            // game.scale.forceOrientation(true);
            // game.scale.pageAlignHorizontally = true;
            game.scale.refresh();
        }
        
        alert("version: 0.2");
    };

    Boot.prototype.create = function() {
        game.state.start('ladingScreen');
    }

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Boot = Boot;
}());
