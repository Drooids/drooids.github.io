var g_ = {
    game: {
        name: 'CountryLife-game',
        container: document.getElementById('CountryLife-game'),
        getRenderer: function() {
            if(DeviceHandler.mbileOrTablet()) {
                return Phaser.AUTO;
            }
            return Phaser.AUTO;
        }
    },
    screen: {
        width: window.innerWidth * window.devicePixelRatio,
        height: window.innerHeight * window.devicePixelRatio,
        getSize: function() {
            return {
                width: this.width + g_.game.container.offsetLeft,
                height: this.height + g_.game.container.offsetTop
            }
        }
    }
};
g_.game.config = {
    width: g_.screen.width,
    height: g_.screen.height,
    renderer: g_.game.getRenderer(),
    multiTexture: true,
    parent: g_.game.name,
    enableDebug: false
};
var game = new Phaser.Game(g_.game.config);
