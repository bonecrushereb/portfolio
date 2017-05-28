(function (module) {
  var projectContoller = {};

  Projects.fetchProjects();
  portfolioView.initProjects();

  projectContoller.index = function() {
    $('.tab-content').hide();
    $('#indproject').fadeIn();
  };


  module.projectContoller = projectContoller;
})(window);
