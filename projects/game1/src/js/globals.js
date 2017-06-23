var g_ = {
    game: {
        name: 'CountryLife-game',
        container: document.getElementById('CountryLife-game')
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
    Phaser.AUTO,
    g_.game.name,
    null,
    true,
    false
);