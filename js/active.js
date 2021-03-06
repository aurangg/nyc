(function ($) {
    'use strict';

    var browserWindow = $(window);

    
    // :: 3.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#cleverNav').classyNav();
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".clever-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 9.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }


})(jQuery);
