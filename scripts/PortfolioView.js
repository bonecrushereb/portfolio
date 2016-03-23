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

    portfolioView.handleMainNav();
    portfolioView.hamburgerClickEvent();
  };

  portfolioView.initBadges = function() {
    Projects.badgesArr.forEach(function(a) {
      $('#skillS').append(a.toHtml('#skills-template'));
    });

    portfolioView.handleMainNav();
    portfolioView.hamburgerClickEvent();
  };

  module.portfolioView = portfolioView;
})(window);
