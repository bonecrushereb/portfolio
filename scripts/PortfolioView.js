var portfolioView = {};

portfolioView.handleMainNav = function() {

  $('.main-nav').on('click', 'li' ,function(){
    var $val = $(this).attr('data-content');
    console.log($val);
    $('.tab-content').hide();
    $('.tab-content[id = "'+ $val +'"]').fadeIn();

  });

  $('.main-nav .tab:first').click();
};


portfolioView.initIndexPage = function() {
  Projects.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

  portfolioView.handleMainNav();
};
