(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  $(function() {
    if( $( window ).width() >= 768 ) {
      /*  intro equal height*/
      $('.intro--height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
      var $elemHeight = $('.intro__col').height();
      $('.intro__col').css('line-height',  $elemHeight + 'px');
    
      /*  endurance equal height*/
      $('.endurance__height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });

      $('.advantages__text').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });

      $('.product__name').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });

      $('.product__photo').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });

    }
  });

  // Fancy Box
  if ($("a.fancyimage").length) {
    $("a.fancyimage").fancybox(); 
  };

  $(document).ready( function() {
    var navbarHeight = $('.navbar').height(),
        windowHeight = $(window).height(),
        deltaHeight = windowHeight - navbarHeight;
    $('.thanks').css('height',  deltaHeight + 'px');
  });

/*var handler = function(){
  
  var height_footer = $('footer').height(); 
  var height_header = $('header').height(); 
  $('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
  
}
$(window).bind('load', handler);
$(window).bind('resize', handler);*/

})(jQuery); // End of use strict