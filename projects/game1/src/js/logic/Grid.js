(function() {
    'use strict';

    // Bounds
    // http://www.html5gamedevs.com/topic/25025-set-world-bounds-for-an-isometric-world/

    function Grid() {
    }

    var isoGroup, cursorPos;

    Grid.prototype.preload = function() {
        game.load.atlas('cow_2', 'assets/img/cow/2/2.png', null,
            game.cache.getJSON('cow_2'));

        game.load.atlas('building-eco', 'assets/img/building/eco.png', null,
            game.cache.getJSON('building-eco'));

        game.load.atlas('building-eco-winter', 'assets/img/building/eco-winter.png', null,
            game.cache.getJSON('building-eco-winter'));

        game.load.atlas('building-cone', 'assets/img/building/cone.png', null,
            game.cache.getJSON('building-cone'));

        game.load.atlas('building-gingerbread', 'assets/img/building/gingerbread.png', null,
            game.cache.getJSON('building-gingerbread'));

        game.load.atlas('building-mill', 'assets/img/building/mill.png', null,
            game.cache.getJSON('building-mill'));

        game.load.atlas('tree-apple-001', 'assets/img/tree/apple-001.png', null,
            game.cache.getJSON('tree-apple-001'));

        game.load.atlas('tree-apple-002', 'assets/img/tree/apple-002.png', null,
            game.cache.getJSON('tree-apple-002'));

        game.load.atlas('garden-fens-white', 'assets/img/garden/fens-white.png', null,
            game.cache.getJSON('garden-fens-white'));

        game.load.atlas('plant-blueberry', 'assets/img/plant/blueberry.png', null,
            game.cache.getJSON('plant-blueberry'));

        game.load.atlas('plant-blackberry', 'assets/img/plant/blackberry.png', null,
            game.cache.getJSON('plant-blackberry'));

        game.load.atlas('plant-redberry', 'assets/img/plant/redberry.png', null,
            game.cache.getJSON('plant-redberry'));

        game.load.atlas('animal-cow-brown', 'assets/img/animal/cow/cow-brown.png', null,
            game.cache.getJSON('animal-cow-brown'));

        game.load.atlas('animal-cow-brown-fence',
            'assets/img/animal/cow/cow-brown-fence.png', null,
            game.cache.getJSON('animal-cow-brown-fence'));

        game.load.atlas('animal-cow-ayrshire-head',
            'assets/img/animal/cow/cow-ayrshire-head.png', null,
            game.cache.getJSON('animal-cow-ayrshire-head'));

        game.load.atlas('animal-cow-ayrshire-body',
            'assets/img/animal/cow/cow-ayrshire-body.png', null,
            game.cache.getJSON('animal-cow-ayrshire-body'));

        game.load.atlas('animal-cow-ayrshire-tail',
            'assets/img/animal/cow/cow-ayrshire-tail.png', null,
            game.cache.getJSON('animal-cow-ayrshire-tail'));

        /*
        game.load.atlas('animal-sheep-white-head',
            'assets/img/animal/sheep/sheep-white-head.png', null,
            game.cache.getJSON('animal-sheep-white-head'));

        game.load.atlas('animal-sheep-white-body',
            'assets/img/animal/sheep/sheep-white-body.png', null,
            game.cache.getJSON('animal-sheep-white-body'));

        game.load.atlas('animal-sheep-white-legs',
            'assets/img/animal/sheep/sheep-white-legs.png', null,
            game.cache.getJSON('animal-sheep-white-legs'));
        */
    };

    Grid.prototype.create = function() {
        game.renderer.setTexturePriority([
            'animal-cow-ayrshire-body', 'animal-cow-ayrshire-head', 'animal-cow-ayrshire-tail',
            'animal-sheep-white-head', 'animal-sheep-white-body', 'animal-sheep-white-legs',
            'tree-apple-001', 'garden-fens-white', 'plant-blueberry', 'plant-redberry', 'plant-blackberry',
            'tree-apple-002', 'building-mill'
        ]);

        game.plugins.add(Phaser.Plugin.SaveCPU);

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // This is used to set a game canvas-based offset for
        // the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left)
        // which is usually undesirable.
        game.iso.anchor.setTo(game.iso.anchor.x, 0.25);

        // Create a group for our tiles.
        isoGroup = game.add.group();

        isoGroup.enableBody = false;

        CountryLife.EntityManager.entities['isoGroup'] = isoGroup;

        // Let's make a load of tiles on a grid.
        this.spawnTiles();

        // Provide a 3D position for the cursor
        cursorPos = new Phaser.Plugin.Isometric.Point3();
    };

    Grid.prototype.update = function() {

        window.rS( 'FPS' ).frame();
        window.rS( 'update' ).start();

        //trigger the frame for anyone watching
        window.rS().update();

        window.rS( 'update' ).end();


    	// Update the cursor position.
        // It's important to understand that screen-to-isometric
        // projection means you have to specify a z position manually,
        // as this cannot be easily determined from the 2D pointer position
        // without extra trickery.
        // By default, the z position is 0 if not set.
        game.iso.unproject(game.input.activePointer.position, cursorPos);

        // cursorPos.z = 100;

        // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
        /*
        isoGroup.forEach(function (tile) {
            var inBounds = tile.isoBounds.contains(cursorPos.x, cursorPos.y, cursorPos.z);
            // If it does, do a little animation and tint change.
            if (!tile.selected && inBounds) {
                tile.selected = true;
                tile.tint = 0x86bfda;
                game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
            // If not, revert back to how it was.
            else if (tile.selected && !inBounds) {
                tile.selected = false;
                tile.tint = 0xffffff;
                game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
        });
        */
    };

    Grid.prototype.spawnTiles = function () {
        window.tiles = [];
        var tile;
        /*
        for (var xx = 0; xx < 2000; xx += 50) {
            for (var yy = 0; yy < 2000; yy += 50) {
                // Create a tile using the new game.add.isoSprite
                // factory method at the specified position.
                // The last parameter is the group you want to add
                // it to (just like game.add.sprite)
                var cow = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);

                // cow.animations.add('run');
                // cow.animations.play('run', 20, true);
            }
        }
        */

         for(var i = 2080; i > 0; i -= 80) {
            game.add.isoSprite(0, i, 0, 'garden-fens-white', 1, isoGroup);
            game.add.isoSprite(0, i - 25, 0, 'garden-fens-white', 2, isoGroup);
            game.add.isoSprite(0, i, 0, 'tree-apple-002', 0, isoGroup);
         }

        game.add.isoSprite(0, 1800, 0, 'building-eco', 0, isoGroup);
        game.add.isoSprite(200, 1800, 0, 'building-eco-winter', 0, isoGroup);
        game.add.isoSprite(1100, 200, 0, 'building-eco-winter', 0);
        game.add.isoSprite(500, 1800, 0, 'building-cone', 0, isoGroup);

        game.add.isoSprite(800, 1800, 0, 'building-gingerbread', 0, isoGroup);
        game.add.isoSprite(600, 0, 0, 'building-eco', 0, isoGroup);

        for(var i = 0; i < 2080; i += 120) {
            game.add.isoSprite(i + 150, 2150, 0, 'garden-fens-white', 0, isoGroup);
            game.add.isoSprite(i + 150  - 10, 2150, 0, 'garden-fens-white', 2, isoGroup);
        }

        for(var i = 0; i < 2080; i += 80) {
            game.add.isoSprite(i, 2000, 0, 'tree-apple-002', 0, isoGroup);
        }

        for(var i = 2080; i > 0; i -= 80) {
            game.add.isoSprite(2200, i, 0, 'garden-fens-white', 1, isoGroup);
            game.add.isoSprite(2220, i + 25, 0, 'garden-fens-white', 2, isoGroup);
        }

        for(var i = 2080; i > 0; i -= 120) {
            game.add.isoSprite(2000, i, 0, 'tree-apple-002', 0, isoGroup);
        }

        for(var i = 0; i < 3 * 98; i += 64) {
            for(var j = 0; j < 10 * 81; j += 64) {
                game.add.isoSprite(1500 + i, 800 + j, 0, 'plant-redberry', 0, isoGroup);
            }
        }

        for(var i = 0; i < 3 * 98; i += 64) {
            for(var j = 0; j < 10 * 81; j += 64) {
                game.add.isoSprite(1100 + i, 800 + j, 0, 'plant-blackberry', 0, isoGroup);
            }
        }

        for(var i = 0; i < 3 * 98; i += 64) {
            for(var j = 0; j < 10 * 81; j += 64) {
                game.add.isoSprite(700 + i, 800 + j, 0, 'plant-blueberry', 0, isoGroup);
            }
        }

        for(var i = 0; i < 3 * 98; i += 64) {
            for(var j = 0; j < 3 * 81; j += 64) {
                game.add.isoSprite(700 + i, 400 + j, 0, 'plant-redberry', 0, isoGroup);
            }
        }

        game.add.isoSprite(0, 0, 0, 'tree-apple-001', 0, isoGroup);
        game.add.isoSprite(0, 200, 0, 'tree-apple-002', 0, isoGroup);

        game.add.isoSprite(0, 300, 0, 'tree-apple-001', 0, isoGroup);
        game.add.isoSprite(0, 100, 0, 'tree-apple-002', 0, isoGroup);

        var cowf = game.add.isoSprite(1830, 0, 0, 'animal-cow-brown-fence', 0);
        var cow = game.add.isoSprite(1800, 40, 0, 'animal-cow-brown', 0);

        if (game.device.desktop) {
            if(g_.game.animation.enabled) {
                cow.animations.add('run');
                cow.animations.play('run', 20, true);
            }
        }

        cow.width *= -1;
        cowf.width *= -1;

        cowf = game.add.isoSprite(1830 - 300, 0, 0, 'animal-cow-brown-fence', 0, isoGroup);
        window.cowf = cowf;

        cowf.width *= -1;

        window.cowft = cowf;

        window.cowb = game.add.isoSprite(1800 - 300, 40, 0, 'animal-cow-ayrshire-body', 0);
        cowb.width *= -1;

        window.cowh = game.add.isoSprite(1790 - 300, 80, 0, 'animal-cow-ayrshire-head', 0);
        cowh.width *= -1;

        window.cowt = game.add.isoSprite(1830 - 300, 30, 0, 'animal-cow-ayrshire-tail', 0);
        cowt.width *= -1;

        if (game.device.desktop) {
            if(g_.game.animation.enabled) {
                cowh.animations.add('run');
                cowh.animations.play('run', 20, true);

                cowt.animations.add('run');
                cowt.animations.play('run', 20, true);
            }
        }

        cowf = game.add.isoSprite(1830 - 150, 0, 0, 'animal-cow-brown-fence', 0);
        cowf.width *= -1;

        window.cowb = game.add.isoSprite(1800 - 150, 40, 0, 'animal-cow-ayrshire-body', 0);
        cowb.width *= -1;

        window.cowh = game.add.isoSprite(1790 - 150, 80, 0, 'animal-cow-ayrshire-head', 0);
        cowh.width *= -1;

        window.cowt = game.add.isoSprite(1830 - 150, 30, 0, 'animal-cow-ayrshire-tail', 0);
        cowt.width *= -1;

        if (game.device.desktop) {
            if(g_.game.animation.enabled) {
                cowh.animations.add('run');
                cowh.animations.play('run', 20, true);

                cowt.animations.add('run');
                cowt.animations.play('run', 20, true);
            }
        }

        /*
        vx = -100;
        vy = 640;
        var sl = game.add.isoSprite(1190 - vx, 640 - vy, 0, 'animal-sheep-white-legs', 0);
        var sb = game.add.isoSprite(1050 - vx, 450 - vy, 0, 'animal-sheep-white-body', 0);
        var sh = game.add.isoSprite(1050 - vx, (450 + 110)  - vy, 0, 'animal-sheep-white-head', 0);

        sl.width *= -1;
        sb.width *= -1;
        sh.width *= -1;

        if(g_.game.animation.enabled) {
        sh.animations.add('run');
        sh.animations.play('run', 20, true);

        sb.animations.add('run');
        sb.animations.play('run', 20, true);
        }

        var vx = 100;
        var vy = 640;
        sl = game.add.isoSprite(1190 - vx, 640 - vy, 0, 'animal-sheep-white-legs', 0);
        sb = game.add.isoSprite(1050 - vx, 450 - vy, 0, 'animal-sheep-white-body', 0);
        sh = game.add.isoSprite(1050 - vx, (450 + 110)  - vy, 0, 'animal-sheep-white-head', 0);

        sl.width *= -1;
        sb.width *= -1;
        sh.width *= -1;

        if(g_.game.animation.enabled) {
        sh.animations.add('run');
        sh.animations.play('run', 20, true);

        sb.animations.add('run');
        sb.animations.play('run', 20, true);
        }

        var vx = -100;
        var vy = 840;
        sl = game.add.isoSprite(1190 - vx, 640 - vy, 0, 'animal-sheep-white-legs', 0);
        sb = game.add.isoSprite(1050 - vx, 450 - vy, 0, 'animal-sheep-white-body', 0);
        sh = game.add.isoSprite(1050 - vx, (450 + 110)  - vy, 0, 'animal-sheep-white-head', 0);

        sl.width *= -1;
        sb.width *= -1;
        sh.width *= -1;

        if (game.device.desktop) {
            if(g_.game.animation.enabled) {
            sh.animations.add('run');
            sh.animations.play('run', 20, true);

            sb.animations.add('run');
            sb.animations.play('run', 20, true);
            }
        }

        var vx = 100;
        var vy = 940;
        sl = game.add.isoSprite(1190 - vx, 640 - vy, 0, 'animal-sheep-white-legs', 0);
        sb = game.add.isoSprite(1050 - vx, 450 - vy, 0, 'animal-sheep-white-body', 0);
        sh = game.add.isoSprite(1050 - vx, (450 + 110)  - vy, 0, 'animal-sheep-white-head', 0);

        sl.width *= -1;
        sb.width *= -1;
        sh.width *= -1;


        if (game.device.desktop) {
            if(g_.game.animation.enabled) {
                sh.animations.add('run');
                sh.animations.play('run', 20, true);

                sb.animations.add('run');
                sb.animations.play('run', 20, true);
            }
        }
        */

        // if (game.device.desktop) {
            for(var y = 0; y < 800; y+= 350) {
                for(var x = 0; x < 300; x+= 150) {

                    cowf = game.add.isoSprite(1830 - 1500 + x, 0 + y, 0, 'animal-cow-brown-fence', 0);
                    cowf.width *= -1;

                    window.cowb = game.add.isoSprite(1800 - 1500 + x, 40 +y, 0, 'animal-cow-ayrshire-body', 0);
                    cowb.width *= -1;

                    window.cowh = game.add.isoSprite(1790 - 1500 + x, 80 + y, 0, 'animal-cow-ayrshire-head', 0);
                    cowh.width *= -1;

                    window.cowt = game.add.isoSprite(1830 - 1500 + x, 30 + y, 0, 'animal-cow-ayrshire-tail', 0);
                    cowt.width *= -1;

                    if (game.device.desktop) {
                        if(g_.game.animation.enabled) {
                            cowh.animations.add('run');
                            cowh.animations.play('run', 20, true);

                            cowt.animations.add('run');
                            cowt.animations.play('run', 20, true);
                        }
                    }

                }
            }
        // }

        game.add.isoSprite(1050, 450, 0, 'building-mill', 0, isoGroup);
        game.add.isoSprite(900, 1600, 0, 'building-mill', 0);
        game.add.isoSprite(1500, 1600, 0, 'building-mill', 0);
        game.add.isoSprite(1500, 450, 0, 'building-mill', 0);

        game.add.isoSprite(1800, 0, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1800, 60, 0, 'tree-apple-002', 0);

        game.add.isoSprite(1800, 160, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1700, 250, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1550, 550, 0, 'tree-apple-002', 0);

        game.add.isoSprite(1350, 450, 0, 'tree-apple-001', 0);

        game.add.isoSprite(1800, 1000, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1800, 1200, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1800, 1500, 0, 'tree-apple-002', 0);
        game.add.isoSprite(1000, 200, 0, 'tree-apple-002', 0);
    }

    Grid.prototype.render = function() {

        window.rS( 'render' ).start();

        window.rS( 'render' ).end();
        window.rS().update();

        // game.debug.text("fps: " + game.time.fps, 20, 20, "#000000");

        /*
        game.debug.text("cursorPos -> x: " + cursorPos.x.toFixed(2)
            + " y: " + cursorPos.y.toFixed(2)
            + " z: " + cursorPos.z.toFixed(2),
            100, 20, "#000000");

        game.debug.cameraInfo(game.camera, 20, 50);
        */
    };

    Grid.prototype.onInputDown = function() {

    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Grid = new Grid();
    window['CL'] = window['CountryLife'];
}());
