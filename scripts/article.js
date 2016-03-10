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
  var $newArticle = $('Projects.template').clone();
  $newArticle.removeClass('template');
  if (!this.publishedOn) {
    $newArticle.addClass('draft');
  }
  $newArticle.attr('data-category', this.category);
  $newArticle.attr('data-author', this.author);
  $newArticle.find('.byline a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.authorUrl);
  $newArticle.find('h1:first').html(this.title);
  $newArticle.find('.Projects-body').html(this.body);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
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
