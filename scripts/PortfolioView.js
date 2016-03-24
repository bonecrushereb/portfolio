(function(module) {

  var portfolioView = {};

  portfolioView.hamburgerClickEvent = function() {
    $('.icon-menu').on('click', function() {
      $('.main-nav ul').toggle();
      console.log('I am functioning');
    });
  };

  portfolioView.codeShow = function(){
    $('.badge').on('click', function() {
      $('.showCode').toggle();
      console.log('badges is functioning');
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

    porfolioView.codeShow();
    portfolioView.hamburgerClickEvent();
  };

  module.portfolioView = portfolioView;
})(window);
