(function() {
    'use strict';

    function ScreenManager() {
    }

    ScreenManager.prototype.create = function() {

        CountryLife.EntityManager.entities['background'] =
            game.add.sprite(0, 0, 'background');

        // Bottom left
        CountryLife.EntityManager.entities['backgroundBottomLeft'] =
            game.add.sprite(0, game.cache.getImage("background").height,
            'backgroundBottomLeft');

        // Bottom right
        CountryLife.EntityManager.entities['backgroundBottomRight'] =
            game.add.sprite(game.cache.getImage("backgroundBottomLeft").width,
            game.cache.getImage("background").height,
            'backgroundBottomRight');

        // Top right
        CountryLife.EntityManager.entities['backgroundTopRight'] =
            game.add.sprite(game.cache.getImage("background").width, 0,
            'backgroundTopRight');

        var wBound =
            game.cache.getImage("background").width +
            game.cache.getImage("backgroundTopRight").width; // = 4932

        var hBound =
            game.cache.getImage("background").height +
            game.cache.getImage("backgroundBottomLeft").height; // = 6064

        game.world.setBounds(
            0, 0,
            wBound,
            hBound
        );
    };

    ScreenManager.prototype.update = function() {
    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].ScreenManager = new ScreenManager();
    window['CL'] = window['CountryLife'];
}());
