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

$(document).ready(function(){
  portfolioView.handleMainNav();
});
