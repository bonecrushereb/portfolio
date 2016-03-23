(function(module) {
  var skillsController = {};

  Projects.fetchBadges();
  portfolioView.initBadges();

  skillsController.index = function() {
    $('.tab-content').hide();
    $('#skills').fadeIn();
  };

  module.skillsController = skillsController;
})(window);
