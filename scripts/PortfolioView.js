(function(module) {

  var portfolioView = {};

  portfolioView.hamburgerClickEvent = function() {
    $('.icon-menu').on('click', function() {
      $('.main-nav ul').toggle();
      console.log('I am functioning');
    });
  };


  portfolioView.initProjects = function() {
    console.log('initProjects is firing', Projects.projectArr);
    Projects.projectArr.forEach(function(a) {

      $('#project').append(a.toHtml($('#project-template')));

    });

    portfolioView.hamburgerClickEvent();
  };

  portfolioView.initBadges = function() {
    Projects.badgesArr.forEach(function(a) {
      $('.skills-list').append(a.toHtml('#skills-template'));
    });

    portfolioView.hamburgerClickEvent();
  };

  module.portfolioView = portfolioView;
})(window);
