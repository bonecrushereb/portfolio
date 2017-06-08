(function (module) {
  var projectController = {};

  Projects.fetchProjects();

  projectController.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn();
    $('#project header').fadeIn();
  };


  module.projectController = projectController;
})(window);
