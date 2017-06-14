(function(module) {

  var portfolioView = {};

  portfolioView.hamburgerClickEvent = function() {
    $('.icon-menu').on('click', function() {
      $('.main-nav ul').toggle();
    });
  };

  portfolioView.changeBackground = function(ctx, next) {
    if (ctx.canonicalPath !== '/') {
      $('html').removeClass('home-page');
      return next();
    }
    $('html').addClass('home-page');
    next();
  }

  portfolioView.initProjects = function() {
    Projects.projectArr.forEach(function(a) {

      $('#project').append(a.toHtml($('#project-template')));
      $('#indproject').append(a.toHtml($('#indproject-template')));


    });

    portfolioView.hamburgerClickEvent();
  };

  module.portfolioView = portfolioView;
})(window);
