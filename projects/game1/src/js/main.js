(function() {
    'use strict';

    var ns = window['CountryLife'];

    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('ladingScreen', ns.LoadingScreen);
    game.state.add('menu', ns.Menu);
    game.state.add('game', ns.Game);

    /* yo phaser:state new-state-files-put-here */
    game.state.start('boot');
})();
