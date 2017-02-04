(function($) {

    $.fn.reveal = function() {
        var args = Array.prototype.slice.call(arguments);

        return this.each(function() {
            var img = $(this),
                src = img.data("src");
            src && img.attr("src", src).load(function() {
                img[args[0]||"show"].apply(img, args.splice(1));
            });

            img.addClass('animated fadeIn');
        });
    }

})(jQuery);
