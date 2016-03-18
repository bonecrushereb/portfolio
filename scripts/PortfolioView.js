var portfolioView = {};

portfolioView.handleMainNav = function() {

  $('.main-nav').on('click', 'li' ,function(){
    var $val = $(this).attr('data-content');
    console.log($val);
    $('.tab-content').hide();
    $('main-nav').show();
    $('.tab-content[id = "'+ $val +'"]').fadeIn();

  });

  $('.main-nav .tab:first').click();
};

portfolioView.hamburgerClickEvent = function(){
  if($('.icon-menu').hasClass('display: none')){

    $('.icon-menu, .tab a').on('click', function() {
      $('.main-nav ul').toggle();
      console.log('I am functioning');
    });
  };
};

// hamburgerClickEvent();

portfolioView.initIndexPage = function() {
  Projects.all.forEach(function(a){
    $('#project').append(a.toHtml());
  });

  portfolioView.handleMainNav();
  portfolioView.hamburgerClickEvent();
};
