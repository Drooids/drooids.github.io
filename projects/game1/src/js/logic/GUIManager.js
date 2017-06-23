(function() {
    'use strict';

    // https://stackoverflow.com/questions/4532166/how-to-capture-a-section-of-a-canvas-to-a-bitmap

    function GUIManager() {
    }

    var GUIManagerp = GUIManager.prototype;

    var rGroup;
    var guiFrames;
    var guiFrame;

    GUIManagerp.events = {
        onInputDownIn: null,
        onInputDownOut: null
    };

    GUIManagerp.preload = function() {
        game.load.atlas('guiRightPanel', 'assets/img/gui/003.png', null,
            game.cache.getJSON('guiRightPanel'));

        for(var key in this.events) {
            this.events[key] = new Phaser.Signal();
        }
    };

    GUIManagerp.create = function() {

        // http://www.html5gamedevs.com/topic/28335-buttons-that-are-not-affected-by-camera-scale-or-position/
        rGroup = game.add.group(null, 'guiFrames', true);
        guiFrames = game.cache.getFrameData('guiRightPanel').getFrames();

        guiFrame = game.add.sprite(5, 0, 'guiRightPanel', 'Bitmap 2 instance 1');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(0, 30, 'guiRightPanel', 'Bitmap 1 instance 1');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(10, 5, 'guiRightPanel', 'fullscreen0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(40, 5, 'guiRightPanel', 'alpha_toggler0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(40 + 30, 5, 'guiRightPanel', 'camera0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(40 + 2*30, 5, 'guiRightPanel', 'zoom_in_btn0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        guiFrame.events.onInputOver.add(this.onInputOver, this);
        guiFrame.events.onInputOut.add(this.onInputOut, this);
        guiFrame.events.onInputDown.add(this.onInputDownIn, this);
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(40 + 3*30, 5, 'guiRightPanel', 'zoom_out_btn0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        guiFrame.events.onInputOver.add(this.onInputOver, this);
        guiFrame.events.onInputOut.add(this.onInputOut, this);
        guiFrame.events.onInputDown.add(this.onInputDownOut, this);
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(40 + 4*29.5, 5, 'guiRightPanel', 'quality_toggler0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        // ---

        guiFrame = game.add.sprite(10, 40, 'guiRightPanel', 'multi_tool0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(38 + 16, 40, 'guiRightPanel', 'plow0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(2*38 + 24, 40, 'guiRightPanel', 'move0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(3*38 + 32, 40, 'guiRightPanel', 'remove0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(10, 40 + 38 + 4, 'guiRightPanel', 'storage0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(38 + 16, 40 + 38 + 4, 'guiRightPanel', 'shop0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(2*38 + 24, 40 + 38 + 4, 'guiRightPanel', 'gifts0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        guiFrame = game.add.sprite(3*38 + 32, 40 + 38 + 4, 'guiRightPanel', 'achievements0000');
        guiFrame.inputEnabled = true;
        guiFrame.input.priorityID = 1000;
        rGroup.add(guiFrame);

        rGroup.y = game.camera.height - rGroup.height - 10;
        rGroup.x = game.camera.width - rGroup.width - 10;

        window.rGroup = rGroup;

        /*
        // todo: Find a way to make adobe export the gui on it's own
        // element positions
        for(var key in guiFrames) {
            guiFrame = game.add.sprite(guiFrames[key]['x'], guiFrames[key]['y'],
                'guiRightPanel', guiFrames[key]['name']);
            guiFrame.inputEnabled = true;
            guiFrame.input.priorityID = 10;
            guiFrame.events.onInputOver.add(onInputDown, this);
            guiFrame.events.onInputOut.add(onInputOut, this);
            guiFrame.events.onInputDown.add(onInputDown, this);
        }
        */
    };

    GUIManagerp.onInputOver = function(e) {
        // console.log(e);
    };

    GUIManagerp.onInputOut = function(e) {
        // console.log(e);
    };

    GUIManagerp.onInputDown = function(e) {
        console.log(e);
    };

    GUIManagerp.onInputDownIn = function(e) {
        this.events.onInputDownIn.dispatch();
    };

    GUIManagerp.onInputDownOut = function(e) {
        this.events.onInputDownOut.dispatch();
    };

    GUIManagerp.update = function() {

    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].GUIManager = new GUIManager();
    window['CL'] = window['CountryLife'];
}());
