(function(module) {

  if(window.location !== "http://localhost:5555/") {
    $('html').css("background", "#1b2b32");
  } else {
    $('html').css("background-image", "url(\"../images/portfoliobackground.png\")");
    $('html').css("background-repeat", "no-repeat");
    $('html').css("background-size", "cover");
  }

  function Projects (opts) {
    Object.keys(opts).forEach(function(property, keys) {
      this[property] = opts[property];
    }, this);
  }

  Projects.projectArr = [];

  Projects.prototype.toHtml = function(scriptID) {

    var template = Handlebars.compile($(scriptID).html());
    return template(this);
  };


  function fetchContent(localStorageId, jsonPath) {
    return function() {
      if (localStorage[localStorageId]) {
        Projects.generateLoadContent(JSON.parse(localStorage[localStorageId]));
        portfolioView.initProjects();
      } else {
        $.getJSON(jsonPath, function(data){
          localStorage.setItem(localStorageId , JSON.stringify(data));
          Projects.generateLoadContent(data);
          portfolioView.initProjects();
        });
      };
        // callback();
    };
  };


  Projects.generateLoadContent = function(data) {
    Projects.projectArr = data.map(function(ele) {
      return new Projects(ele);
    });
  };

  Projects.fetchProjects = fetchContent('projectsData', 'data/projectData.json');

  module.Projects = Projects;
})(window);
