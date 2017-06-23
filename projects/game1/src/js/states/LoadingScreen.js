(function() {
    'use strict';

    function LoadingScreen() {
    }

    LoadingScreen.prototype.preload = function() {
        game.load.atlas('preload-loading-icon',
            'assets/img/preload/loading-icon.png', null,
            game.cache.getJSON('preload-loading-icon'));

        game.load.atlas('preload-game-name',
            'assets/img/preload/game-name.png', null,
            game.cache.getJSON('preload-game-name'));
    };

    LoadingScreen.prototype.create = function() {
        game.state.start('preloader');
    };

    LoadingScreen.prototype.update = function() {

    };

    LoadingScreen.prototype.onInputDown = function() {

    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].LoadingScreen = LoadingScreen;
    window['CL'] = window['CountryLife'];
}());
