(function(module) {
  
  function Projects (opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
    this.img = opts.img;
  }

  Projects.all = [];

  Projects.prototype.toHtml = function() {

    var template = Handlebars.compile($('#project-template').html());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishedOn = this.publishedOn ? 'published' + this.daysAgo + 'days agao' : '(draft)';

    return template(this);
  };

  Projects.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    rawData.forEach(function(ele) {
      Projects.all.push(new Projects(ele));
    });
  };

  Projects.fetchAll = function() {
    console.log('fetchAll does fire!');
    if (localStorage.rawData) {
      console.log('localStorage');
      Projects.loadAll(JSON.parse(localStorage.rawData));
      portfolioView.initIndexPage();
    } else {
      console.log('json');
      $.getJSON('data/projectData.json', function(rawData){
        console.log('json retreval');
        Projects.loadAll(rawData);
        localStorage.setItem('rawData', JSON.stringify(rawData));
        console.log('rawData is set');
        portfolioView.initIndexPage();
      }).error(function (err){
        console.log(err);
      });
    }
  };

  module.Projects = Projects;
})(window);
