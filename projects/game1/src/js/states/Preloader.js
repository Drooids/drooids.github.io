(function() {
  'use strict';

    function Preloader() {
    }

    Preloader.prototype.preload = function () {

        // Game loading animation
        var gameName = game.add.sprite(game.width / 3, game.height / 3,
            'preload-game-name');

        var loadingIco = game.add.sprite(gameName.x + (gameName.width / 2) - 15,
            gameName.y + gameName.height, 'preload-loading-icon');

        loadingIco.animations.add('run');
        loadingIco.animations.play('run', 20, true);

        // Load assets
        this.preloadResources();
    };

    Preloader.prototype.preloadResources = function () {
        // Background
        game.load.image('background', 'assets/img/background/image_511-min.png');
        game.load.image('backgroundTopRight', 'assets/img/background/image_510-min.png');
        game.load.image('backgroundBottomLeft', 'assets/img/background/image_509-min.png');
        game.load.image('backgroundBottomRight', 'assets/img/background/image_508-min.png');

        // Grid
        game.load.image('tile', 'assets/img/tile.png');

        game.load.image('tile_soil1', 'assets/img/ground/image_582.png');
        game.load.image('tile_soil2', 'assets/img/ground/image_585.png');

        game.load.image('tile_tree1', 'assets/img/tmp/image 8.png');
        game.load.image('tile_tree2', 'assets/img/tmp/image 7.png');
        game.load.image('tile_tree3', 'assets/img/tmp/image 12.png');

        game.load.json('cow_2', 'assets/img/cow/2/2.json');

        game.load.spritesheet('berry',
            'assets/img/berry/blackberries.png', 100, 78, 4);

        game.load.json('building-eco', 'assets/img/building/eco.json');
        game.load.json('building-eco-winter', 'assets/img/building/eco-winter.json');
        game.load.json('building-cone', 'assets/img/building/cone.json');
        game.load.json('building-gingerbread', 'assets/img/building/gingerbread.json');
        game.load.json('building-mill', 'assets/img/building/mill.json');

        game.load.json('tree-apple-001', 'assets/img/tree/apple-001.json');
        game.load.json('tree-apple-002', 'assets/img/tree/apple-002.json');

        game.load.json('garden-fens-white', 'assets/img/garden/fens-white.json');

        game.load.json('plant-blueberry', 'assets/img/plant/blueberry.json');
        game.load.json('plant-blackberry', 'assets/img/plant/blackberry.json');
        game.load.json('plant-redberry', 'assets/img/plant/redberry.json');

        game.load.json('animal-cow-brown', 'assets/img/animal/cow/cow-brown.json');
        game.load.json('animal-cow-brown-fence',
            'assets/img/animal/cow/cow-brown-fence.json');

        game.load.json('animal-cow-ayrshire-head',
            'assets/img/animal/cow/cow-ayrshire-head.json');

        game.load.json('animal-cow-ayrshire-body',
            'assets/img/animal/cow/cow-ayrshire-body.json');

        game.load.json('animal-cow-ayrshire-tail',
            'assets/img/animal/cow/cow-ayrshire-tail.json');

        game.load.json('animal-sheep-white-head',
            'assets/img/animal/sheep/sheep-white-head.json');

        game.load.json('animal-sheep-white-body',
            'assets/img/animal/sheep/sheep-white-body.json');

        game.load.json('animal-sheep-white-legs',
            'assets/img/animal/sheep/sheep-white-legs.json');

        // Gui
        game.load.json('guiRightPanel', 'assets/img/gui/003.json');

        game.time.advancedTiming = true;
    };

    Preloader.prototype.create = function () {
        game.state.start('game');
    };

    Preloader.prototype.update = function () {

    };

    Preloader.prototype.onLoadComplete = function () {

    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Preloader = Preloader;
    window['CL'] = window['CountryLife'];
}());
