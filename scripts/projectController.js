(function (module) {
  var projectController = {};

  Projects.fetchProjects(); 
  projectController.index = function() {
    $('.tab-content').hide();
    $('#project header action:last-child').hide();
    $('#project, #project header').fadeIn();
    $('#project header').each(function(i, ele) {
      let eleTitle = $(ele).attr('id');
      $(ele).find('a').attr('href', `/projects/${eleTitle}`);
    });
  };


  module.projectController = projectController;
})(window);
