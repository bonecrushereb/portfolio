// (function(module) {

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
    return function(callback) {
      if (localStorage[localStorageId]) {
        loadContent(JSON.parse(localStorage[localStorageId]));
        callback();
      } else {
        $.getJSON(jsonPath, function(data){
          console.log(data);
          loadContent(data);
          localStorage[localStorageId] = JSON.stringify(data);
          callback();
        });
      };
    };
  };


  function GenerateloadContent(arr) {
    return function(data) {
      Projects[arr] = data.map(function(ele) {
        return new Projects(ele);
      });
    };
  };

  Projects.loadProjects = GenerateloadContent('projectArr');
  Projects.loadBadges = GenerateloadContent('badgesArr');

  Projects.fetchProjects = fetchContent('projectsData', '/data/projectData.json', Projects.loadProjects);
  Projects.fetchBadges = fetchContent('badgeData', '/data/badgesData.json', Projects.loadBadges);

//   module.Projects = Projects;
// })(window);
