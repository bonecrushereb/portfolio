(function (module) {
  var indprojectController = {};

  indprojectController.index = function(ctx) {
    let projectToShow = ctx.params.title;
    $('#project header').hide();
    $(`#${projectToShow}`).fadeIn();
  };


  module.indprojectController = indprojectController;
})(window);
