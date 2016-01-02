// Main object
var drooids = {};

drooids.__globals__ = {
  brand: 'Drooids',
}

drooids.window = window;
drooids.body = $('body');
drooids.navbar = $('.navbar-collapse ul li a');
drooids.pageScroll = $('.page-scroll');
drooids.pageScroll.a = $('.page-scroll a');
drooids.logo = {};
drooids.logo.jumbo = $('.logo-jumbo');

// Onload
drooids.onload = function(func) {
  this.window.onload = func;
};

// Helpers
drooids.helpers = {

  assign: function(config, config1) {
    for(var key in config) {
      for(var _key in config1) {
        if(key == _key) {
          config1[_key] = config[key];
        }
      }
    }
    return config1;
  },

  _scrollTo: function(element, config) {
    if(!$(element).length)
      return;

    var _config = {
      timeout: 10
    };
    _config = this.assign(config, _config);

    $('html, body').stop().animate({
        scrollTop: $(element).offset().top
    }, _config.timeout, 'easeInOutExpo');
  },

  getParameterByName: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

};

drooids.include = function() {

};

drooids.onload(function(e) {
  setTimeout(function() {

    document.getElementById('index').style.display = "block";
    document.getElementById('loader').style.display = "none";

    var scrollParam = drooids.helpers.getParameterByName('scrollTo');

    drooids.logo.jumbo.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

      // Scroll by param
      if(scrollParam.length) {
        var element;
        if(scrollParam.indexOf('id_') > -1) {
          element = '#' + scrollParam.slice(3, scrollParam.length);
        }
        if(scrollParam.indexOf('class_') > -1) {
          element = '.' + scrollParam.slice(6, scrollParam.length);
        }
        drooids.helpers._scrollTo(element, {timeout: 1000});
      }
    });

    // Scroll spy
    drooids.body.scrollspy({
      target: '.navbar-fixed-top'
    });

    // Cool contact form
    drooids.body.on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Closes the Responsive Menu on Menu Item Click
    drooids.navbar.click(function() {
      $('.navbar-toggle:visible').click();
    });

    drooids.pageScroll.a.bind('click', function(event) {
      var $anchor = $(this);
      drooids.helpers._scrollTo($anchor.attr('href'), {
          timeout: 1200
      });
      event.preventDefault();
    });

    // Owl Carousel
    // Todo: change id name...
    var owl = $("#owl-demo");

    owl.owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left fa-3x icon-white'></i>", "<i class='fa fa-chevron-right fa-3x icon-white'></i>"],
        slideSpeed: 1300,
        paginationSpeed: 1400,
        singleItem: true,

        // "singleItem:true" is a shortcut for:
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    // Google maps

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      zoom: 6,
      mapTypeControl: false,
      scrollwheel: false,
      center: new google.maps.LatLng(58.8234151, 5.7239151,201), // New York
      styles: [{
          "featureType":"administrative","elementType":"labels.text.fill",
          "stylers": [{"color":"#444444"}]
        }, {
          "featureType":"landscape","elementType":"all",
          "stylers":[{"color":"#f2f2f2"}]
        }, {
          "featureType":"poi","elementType":"all",
          "stylers":[{"visibility":"off"}]
        }, {
          "featureType":"road","elementType":"all",
          "stylers":[{"saturation":-100}, {"lightness":45}]
        }, {
          "featureType":"road.highway","elementType":"all",
          "stylers":[{"visibility":"simplified"}]
        }, {
          "featureType":"road.arterial","elementType":"labels.icon",
          "stylers":[{"visibility":"off"}]
        }, {
          "featureType":"transit","elementType":"all",
          "stylers":[{"visibility":"off"}]
        },{
          "featureType":"water","elementType":"all",
          "stylers":[{"color":"#46bcec"},{"visibility":"on"}]
      }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(58.8234151, 5.7239151,201),
      map: map,
      title: 'Snazzy!'
    });

  }, 800);

  // Footer
 // Set the CR on the footer.
  var date = new Date();
  document.getElementById('id-copy-right').innerHTML = "Copyright © " + drooids.__globals__.brand + " " + date.getUTCFullYear();

});

