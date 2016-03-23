(function(module) {

  function Projects (opts) {
    Object.keys(opts).forEach(function(property, keys) {
      this[property] = opts[property];
    }, this);
    // console.log(this[property]);
  }

  Projects.projectArr = [];
  Projects.badgesArr = [];

  Projects.prototype.toHtml = function(scriptID) {

    var template = Handlebars.compile($(scriptID).html());
    return template(this);
  };


  function fetchContent(localStorageId, jsonPath, loadContent) {
    console.log('fetchContent is firing');
    return function(callback) {
      if (localStorage[localStorageId]) {
        // console.log(localStorage[localStorageId]);
        Projects.generateLoadContent(JSON.parse(localStorage[localStorageId]));
      } else {
        $.getJSON(jsonPath, function(data){
          // console.log('the data for both json files is ', data);
          localStorage.setItem(localStorageId , JSON.stringify(data));
          // console.log(localStorage.localStorageId);
        });
      };
      callback();
    };
  };


  Projects.generateLoadContent = function(data) {

    Projects.projectArr = data.map(function(ele) {
      return new Projects(ele);
    });

    Projects.badgesArr = data.map(function(ele) {
      return new Projects(ele);
    });

    console.log('slugs',Projects.projectArr);
    console.log('this is an array', data);

  };


  Projects.fetchProjects = fetchContent('projectsData', '/data/projectData.json');
  Projects.fetchBadges = fetchContent('badgeData', '/data/badgesData.json');

  module.Projects = Projects;
})(window);
