(function() {
    'use strict';

    function Camera() {
        this.scrollSpeed = 10;

        this.scaleSpeed = 0.5;
        this.scaleLevel = 0.5;
        this.prevScaleLevel = 1;
        this.scaleMax = 1;
        this.scaleMin = 0.25;
    }

    Camera.prototype.create = function() {
        game.camera.scale.set(this.scaleLevel);

        game.camera.x =
            (CountryLife.EntityManager.entities['isoGroup'].children[0].x
            - game.camera.width - 50) / 2;

        game.camera.y =
            CountryLife.EntityManager.entities['isoGroup'].children[0].y
            - game.camera.height - 50;
    };

    Camera.prototype.onScroll = function() {
        var dirx = 0;
        var diry = 0;

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) { diry = -1; }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) { dirx = 1; }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) { dirx = -1; }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) { diry = 1; }

        game.camera.x += dirx * this.scrollSpeed;
        game.camera.y += diry * this.scrollSpeed;
    };

    Camera.prototype.onDrag = function() {
        // Change camera perspective on mouse drag
        if (game.input.activePointer.isDown) {
            if (game.origDragPoint) {
                // move the camera by the amount the mouse has moved since
                // last update
                game.camera.x += game.origDragPoint.x
                - game.input.activePointer.position.x;

                game.camera.y += game.origDragPoint.y
                - game.input.activePointer.position.y;
            }
            // set new drag origin to current position
            game.origDragPoint = game.input.activePointer.position.clone();
        } else {
          game.origDragPoint = null;
        }
    };

    Camera.prototype.scale = function(dir) {
        if(dir < 0) {
            this.scaleLevel *= this.scaleSpeed;
        } else {
            this.scaleLevel /= this.scaleSpeed;
        }

        if(this.scaleLevel > 1) {
            this.scaleLevel = Math.min(this.scaleLevel, this.scaleMax);
        }
        if(this.scaleLevel < 1) {
            this.scaleLevel = Math.max(this.scaleLevel, this.scaleMin);
        }

        this.prevScaleLevel = JSON.parse(JSON.stringify(game.camera.scale));
        game.camera.scale.set(this.scaleLevel);
        this.center();

        // game.world.scale.set(this.scaleLevel)
        // game.world.camera.scale.set(this.scaleLevel);

        // game.world.resize(6000, 5000);
        //
        // game.world.setBounds(0, 0,
        //    game.world.getBounds().width + 100,
        //    game.world.getBounds().height);
    };

    Camera.prototype.center = function() {
        var cx = game.camera.view.centerX / this.prevScaleLevel.x;
        var cy = game.camera.view.centerY / this.prevScaleLevel.y;

        game.camera.focusOnXY(cx * game.camera.scale.x, cy * game.camera.scale.y);
    };

    Camera.prototype.update = function() {
        this.onDrag();
        this.onScroll();

        CL.GUIManager.events.onInputDownIn.add(this.scale, this, 0, 1);
        CL.GUIManager.events.onInputDownOut.add(this.scale, this, 0, -1);
    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].Camera = new Camera();
    window['CL'] = window['CountryLife'];
}());
