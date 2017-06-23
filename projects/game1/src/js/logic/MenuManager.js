(function() {
    'use strict';

    // http://www.html5gamedevs.com/topic/28335-buttons-that-are-not-affected-by-camera-scale-or-position/
    // var buttonsGroup = this.game.add.group(null, "buttonsGroup", true);
    // var theSprite = buttonsGroup.create( x, y, "spriteName" );

    function MenuManager() {
    }

    MenuManager.prototype.update = function() {
    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].MenuManager = new MenuManager();
    window['CL'] = window['CountryLife'];
}());
