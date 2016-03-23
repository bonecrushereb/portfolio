(function(module) {
  var skillsController = {};

  // Projects.fetchContent (portfolioView.initSkills);

  skillsController.index = function() {
    $('.tab-content').hide();
    $('#skills').fadeIn();
  };

  module.skillsController = skillsController;
})(window);
