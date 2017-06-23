(function() {

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var scripts = [
    'js/modernizer/modernizr.js',
    'js/jquery.js',
    'js/owl.carousel/dist/owl.carousel.min.js',
    'js/owl.carousel/src/js/owl.navigation.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js',
    'js/bootstrap.min.js',
    'js/classie.js',
    'js/cbpAnimatedHeader.js',
    'https://maps.googleapis.com/maps/api/js?sensor=false',
    'js/map.js',
    'js/drooids.js',
    'js/imageLoader.js'
];

for(var key in scripts) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = scripts[key];
    document.body.appendChild(s);
}

})();