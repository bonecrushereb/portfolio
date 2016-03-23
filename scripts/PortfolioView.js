(function(module) {

  var portfolioView = {};

  portfolioView.handleMainNav = function() {

    $('.main-nav').on('click', 'li', function() {
      var $val = $(this).attr('data-content');
      console.log($val);
      $('.tab-content').hide();
      $('main-nav').show();
      $('.tab-content[id = "' + $val + '"]').fadeIn();

    });

    $('.main-nav .tab:first').click();
  };

  portfolioView.hamburgerClickEvent = function() {
    $('.icon-menu').on('click', function() {
      $('.main-nav ul').toggle();
      console.log('I am functioning');
    });
  };


  portfolioView.initProjects = function() {
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
