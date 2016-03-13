var projects = [];

function Projects (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
  this.img = opts.img;
}

Projects.prototype.toHtml = function() {

  var template = Handlebars.compile($('#project-template').html());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishedOn = this.publishedOn ? 'published' + this.daysAgo + 'days agao' : '(draft)';

  return template(this);
};

projectData.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(a){
  $('#project').append(a.toHtml());
});
