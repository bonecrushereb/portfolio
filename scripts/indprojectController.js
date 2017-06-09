(function (module) {
  var indprojectController = {};

  indprojectController.index = function(ctx) {
    let projectToShow = ctx.params.title;
    let $projectToShow = $(`#${projectToShow}`);
    let $anchorElement = $projectToShow.find('a');
    let newLink = $anchorElement.attr('data-link');

    $('#project header').hide();
    $projectToShow.fadeIn();
    $projectToShow.find('action:last-child').fadeIn();
    $anchorElement.attr('href', newLink);
  };


  module.indprojectController = indprojectController;
})(window);
