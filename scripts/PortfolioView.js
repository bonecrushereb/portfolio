var portfolioView = {};

portfolioView.handleMainNav = function() {
  // TODO: Add an event handler to .main-nav element that will power the Tabs feature.
  //       Clicking any .tab element should hide all the .tab-content sections, and then reveal the
  //       single .tab-content section that is associated with the clicked .tab element.
  //       So: You need to dynamically build a selector string with the correct ID, based on the
  //       data available to you on the .tab element that was clicked.
  $('.main-nav').on('click', 'li' ,function(){
    var $val = $(this).attr('data-content');
    console.log($val);
    $('.tab-content').hide();
    $('.tab-content[id = "'+ $val +'"]').fadeIn();

  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

$(document).ready(function(){
  portfolioView.handleMainNav();
});
