(function (module) {
  var projectContoller = {};

  // Projects.fetchContent(portfolioView.initProjects);

  projectContoller.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn();
  };


  module.projectContoller = projectContoller;
})(window);
