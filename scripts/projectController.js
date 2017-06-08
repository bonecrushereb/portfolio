(function (module) {
  var projectController = {};

  Projects.fetchProjects();

  // When the projects page is loaded, hide all sections with a class of tab-content, then hide all
  // the action elements that are a last child. This effectively hides the action elements with all
  // the <p> tags in them.
  // Then fadeIn both the element with #project (which is the projects section), and all header elements
  // that are children of #project (which are your three indprojects). Because the action:last-child
  // element was hidden for each of these projects, we should only see the title and image.
  // However, since the indprojectController also changes the hrefs to the actual projectURLs, we need
  // to properly update them back to linking to /projects/title.
  // So, using jquery(selector).each, we can iterate over each indproject, which is a header element,
  // and do so. We grab the id, which should be the project's title, then find the anchor tag child
  // with jquery(selector).find, and update its href to be, as it originally was in our template,
  // /projects/title.
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
