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
  var $newProjects = $('Projects.template').clone();
  $newProjects.removeClass('template');
  if (!this.publishedOn) {
    $newProjects.addClass('draft');
  }

  $newProjects.find('h1:first').text(this.title);
  $newProjects.find('.byline a').attr('data-author', this.author);
  $newProjects.find('.byline a').html(this.author);
  $newProjects.attr('data-authorUrl', this.authorUrl);
  $newProjects.find('.project-body').html(this.body);
  $newProjects.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProjects.find('time[pubdate]').attr('title', this.publishedOn);

  $newProjects.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newProjects.append('<hr>');

  return $newProjects;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(a){
  $('#Projects').append(a.toHtml());
});
