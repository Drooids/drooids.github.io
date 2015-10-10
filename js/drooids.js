var __globals__ = {
    brand: 'Drooids'
}

/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){

    var owl = $("#owl-demo");

    owl.owlCarousel({
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-chevron-left fa-3x icon-white'></i>",
          "<i class='fa fa-chevron-right fa-3x icon-white'></i>"
        ],
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

    // Custom Navigation Events
    /*
        $(".next").click(function(){
            owl.trigger('next.owl.carousel');
        });
        $(".prev").click(function(){
            owl.trigger('prev.owl.carousel');
        });
    */

    // Set the CR on the footer.
    var date = new Date();
    document.getElementById('id-copy-right').innerHTML = "Copyright &copy; " + __globals__.brand + " " + date.getUTCFullYear();

});