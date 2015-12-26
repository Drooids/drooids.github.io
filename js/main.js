window.helpers = {
  _scrollTo: function(element, config) {
    if(!$(element).length)
      return;

    var _config = {
      timeout: 10
    };
    for(var key in config) {
      for(var _key in _config) {
        if(key == _key) {
          _config[_key] = config[key];
        }
      }
    }

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
window.onload = function(e) {
    setTimeout(function() {
      document.getElementById('index').style.display = "block";
      document.getElementById('loader').style.display = "none";

      var scrollParam = window.helpers.getParameterByName('scrollTo');

      // Google maps

      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 6,

          mapTypeControl: false,
          scrollwheel: false,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(58.8234151, 5.7239151,201), // New York

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(58.8234151, 5.7239151,201),
          map: map,
          title: 'Snazzy!'
      });

      // Accept parameters from the url
      // todo: load animation through js and call this
      // after animation has been finished
      setTimeout(function() {
        if(scrollParam.length) {
          var element;
          if(scrollParam.indexOf('id_') > -1) {
            element = '#' + scrollParam.slice(3, scrollParam.length);
          }
          if(scrollParam.indexOf('class_') > -1) {
            element = '.' + scrollParam.slice(6, scrollParam.length);
          }
          window.helpers._scrollTo(element);
        }
      }, 500);

    }, 800);
};

// External stuff

var clicky_site_ids = clicky_site_ids || [];
clicky_site_ids.push(100886501);
(function() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//static.getclicky.com/js';
  ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
})();
