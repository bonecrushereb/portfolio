(function (module) {
  var projectContoller = {};

  Projects.fetchProjects();
  portfolioView.initProjects();

  projectContoller.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn();
  };


  module.projectContoller = projectContoller;
})(window);
