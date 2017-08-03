var g_ = {
    game: {
        name: 'CountryLife-game',
        container: document.getElementById('CountryLife-game'),
        detectPlatform: function() {
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
var game = new Phaser.Game(
    g_.screen.width,
    g_.screen.height,
    g_.game.detectPlatform(),
    g_.game.name,
    null,
    true,
    false
);