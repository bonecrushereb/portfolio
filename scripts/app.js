(function(module) {

  function Projects (opts) {
    Object.keys(opts).forEach(function(property, keys) {
      this[property] = opts[property];
    }, this);
    console.log(this[property]);
  }

  Projects.projectArr = [];
  Projects.badgesArr = [];

  Projects.prototype.toHtml = function() {

    var template = Handlebars.compile($('#project-template').html());

    return template(this);
  };


  function fetchContent(localStorageId, jsonPath, loadContent) {
    console.log('fetchContent is firing');
    return function() {
      if (localStorage[localStorageId]) {
        generateLoadContent(JSON.parse(localStorage[localStorageId]));
      } else {
        $.getJSON(jsonPath, function(data){
          console.log('the data for both json files is ', data);
          localStorage.setItem(localStorageId , JSON.stringify(data));
          console.log(localStorage.localStorageId);
        });
      };
    };
  };


  function generateLoadContent(arr) {
    return function(data) {
      Projects[arr] = data.map(function(ele) {
        return new Projects(ele);
      });
    };
  };

  Projects.loadProjects = generateLoadContent('projectArr');
  Projects.loadBadges = generateLoadContent('badgesArr');

  Projects.fetchProjects = fetchContent('projectsData', '/data/projectData.json', Projects.loadProjects);
  Projects.fetchBadges = fetchContent('badgeData', '/data/badgesData.json', Projects.loadBadges);

  module.Projects = Projects;
})(window);
