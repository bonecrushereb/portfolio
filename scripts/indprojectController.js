(function (module) {
  var indprojectController = {};

  // In order to know what project to show, we can grab the ctx.params.title value
  // from our URL, since clicking on a project's image navigates to /projects/title.
  // We then hide all #project header elements (which is each individual project),
  // then fade in both the project we want to show, as well as its action element that's
  // a last child. This action element was originally hidden by the projectController
  // that fired when the user navigated to the /projects route.
  // We stored a reference to the project's deployed page in the data-link attribute
  // in our Handlebars template, so we can update the href accordingly by getting that
  // value using the jQuery(selector).attr getter. Recall that passing one argument into
  // the .attr() function gets the value, while passing two arguments into it sets the
  // value.
  indprojectController.index = function(ctx) {
    let projectToShow = ctx.params.title;
    // Instead of querying the DOM repeatedly, we can store reference to the element in a variable.
    // Since it's a jQuery object, we note it by starting the variable with a $.
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
