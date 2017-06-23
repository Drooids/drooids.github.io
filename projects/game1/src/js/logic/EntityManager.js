(function() {
    'use strict';

    function EntityManager() {
        this.entities = {};
    }

    EntityManager.prototype.update = function() {
    };

    window['CountryLife'] = window['CountryLife'] || {};
    window['CountryLife'].EntityManager = new EntityManager();
    window['CL'] = window['CountryLife'];
}());
