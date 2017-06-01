(function (module) {
  var indprojectContoller = {};

  Projects.fetchProjects();
  portfolioView.initProjects();

  indprojectController.index = function() {
    $('.tab-content').hide();
    $('#indproject').fadeIn();
  };


  module.indprojectController = indprojectController;
})(window);
