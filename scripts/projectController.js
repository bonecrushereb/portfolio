(function (module) {
  var projectController = {};

  Projects.fetchProjects();
  portfolioView.initProjects();

  projectController.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn();
  };


  module.projectController = projectController;
})(window);
