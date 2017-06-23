(function() {
  'use strict';

  function Menu() {

  }

  Menu.prototype.create = function() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'MENU', {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center'
    });
  };

  Menu.prototype.update = function() {

  };

  Menu.prototype.onDown = function() {
  };

  window['CountryLife'] = window['CountryLife'] || {};
  window['CountryLife'].Menu = Menu;
  window['CL'] = window['CountryLife'];
}());
