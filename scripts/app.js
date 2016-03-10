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
  var $Projects = $('Projects.template').clone();
  $Projects.removeClass('template');
  if (!this.publishedOn) {
    $Projects.addClass('draft');
  }

  $newProject.find('h1:first').text(this.title);
  $newProject.find('.byline a').attr('data-author', this.author);
  $newProject.find('.byline a').html(this.author);
  $newProject.attr('data-authorUrl', this.authorUrl);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newProject.append('<hr>');

  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  Projectss.push(new Article(ele));
});

Projectss.forEach(function(a){
  $('#Projectss').append(a.toHtml());
});
