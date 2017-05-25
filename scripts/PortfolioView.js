(function(module) {

  var portfolioView = {};

  portfolioView.hamburgerClickEvent = function() {
    $('.icon-menu').on('click', function() {
      $('.main-nav ul').toggle();
    });
  };



  portfolioView.initProjects = function() {
    Projects.projectArr.forEach(function(a) {

      $('#project').append(a.toHtml($('#project-template')));

    });

    portfolioView.hamburgerClickEvent();
  };

  module.portfolioView = portfolioView;
})(window);
