(function (module) {
  var projectContoller = {};

  Projects.fetchContent(articleView.initProjects);

  projectContoller.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn();
  };


  module.projectContoller = projectContoller;
})(window);
