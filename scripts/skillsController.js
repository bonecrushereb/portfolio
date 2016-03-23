(function(module) {
  var skillsController = {};

  Projects.fetchConent (articleView.initSkills);

  skillsController.index = function() {
    $('.tab-content').hide();
    $('#skills').fadeIn();
  };

  module.skillssController = skillsController;
})(window);
