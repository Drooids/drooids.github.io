/**
 * Implement Ideas.
 * @type {Object}
 */
var __constructor = {
	getElement: function(param) {
		return param;
	},
	implement: function(elements) {
		return this.G_buildInMaigc + this.getElement();
	},
	qualityControll: function() {
		( this.G_buildInMaigc.speedTester + this.G_buildInMaigc.speedTester ) * this.getElement();
	},
	getResult: function(elements) {
		this.getElement(elements);
		this.implement(elements);
		this.qualityControll();
	}
}

/**
 * Reuse it anywhere.
 * @type {Array}
 */
var __ideas__ = [0, 1, 2, 3, 'make', 'make run', 'make construct'];

/**
 * Get quick and stable results.
 */
__constructor.getResult(__ideas__);