(function() {
    'use strict';

    function Game() {
    }

    Game.prototype.preload = function() {
        CL.Grid.preload();
        CL.GUIManager.preload();
    };

    Game.prototype.create = function() {
        CL.ScreenManager.create();
        CL.Grid.create();
        CL.Camera.create();
        CL.GUIManager.create();
    };

    Game.prototype.update = function() {
        CL.Grid.update();
        CL.Camera.update();
        CL.GUIManager.update();
    };

    Game.prototype.render = function() {
        CL.Grid.render();
    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Game = Game;
    window['CL'] = window['CountryLife'];
    
    // todo: remove me later on...
    if(game.renderer instanceof PIXI.CanvasRenderer) { alert('canvas'); } else { alert('webgl'); }
}());
