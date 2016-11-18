(function ($) {
  Drupal.behaviors.commerce_add_to_cart_confirmation_overlay = {
    attach:function (context, settings) {
      if ($('.commerce-add-to-cart-confirmation').length > 0) {
        // Add the background overlay.
        $('body').append("<div class=\"commerce_add_to_cart_confirmation_overlay\"></div>");

        // Enable the close link.
        $('.commerce-add-to-cart-confirmation-close').live('click touchend', function(e) {
          e.preventDefault();
          $('.commerce-add-to-cart-confirmation').remove();
          $('.commerce_add_to_cart_confirmation_overlay').remove();
        });
      }
    }
  }
})(jQuery);
;
(function ($) {

  // Disable checkboxes when the user clicks on one of them. (prevent
  // multi-clic
  Drupal.behaviors.kickstartSearch = {
    attach:function (context) {
      $('.facetapi-checkbox').bind('click', function(e) {
        $('.facetapi-checkbox').attr("disabled", true);
      });
    }
  }
})(jQuery);
;
(function ($) {
  Drupal.behaviors.fitvids = {
    attach: function (context, settings) {
      try
      {
        // Check that fitvids exists
        if (typeof $.fn.fitVids !== 'undefined') {
        
          // Check that the settings object exists
          if (typeof settings.fitvids !== 'undefined') {
            
            // Default settings values
            var selectors = ['body'];
            var simplifymarkup = true;
            var custom_domains = null;
            
            // Get settings for this behaviour
            if (typeof settings.fitvids.selectors !== 'undefined') {
              selectors = settings.fitvids.selectors;
            }
            if (typeof settings.fitvids.simplifymarkup !== 'undefined') {
              simplifymarkup = settings.fitvids.simplifymarkup;
            }
            if (settings.fitvids.custom_domains.length > 0) {
              custom_domains = settings.fitvids.custom_domains;
            }
                
            // Remove media wrappers
            if (simplifymarkup) {
              if ($(".media-youtube-outer-wrapper").length) {
                $(".media-youtube-outer-wrapper").removeAttr("style");
                $(".media-youtube-preview-wrapper").removeAttr("style");
                $(".media-youtube-outer-wrapper").removeClass("media-youtube-outer-wrapper");
                $(".media-youtube-preview-wrapper").removeClass("media-youtube-preview-wrapper");
              }
              if ($(".media-vimeo-outer-wrapper").length) {
                $(".media-vimeo-outer-wrapper").removeAttr("style");
                $(".media-vimeo-preview-wrapper").removeAttr("style");
                $(".media-vimeo-outer-wrapper").removeClass("media-vimeo-outer-wrapper");
                $(".media-vimeo-preview-wrapper").removeClass("media-vimeo-preview-wrapper");
              }
            }
            
            // Fitvids!
            for (var x = 0; x < selectors.length; x ++) {
              $(selectors[x]).fitVids({customSelector: custom_domains});
            }
          }
        }
      }
      catch (e) {
        // catch any fitvids errors
        window.console && console.warn('Fitvids stopped with the following exception');
        window.console && console.error(e);
      }
    }
  };
}(jQuery));
;
