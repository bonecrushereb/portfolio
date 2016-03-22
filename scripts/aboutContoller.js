(function (module) {
  var aboutContoller = {};

  aboutContoller.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };


  module.aboutController = aboutContoller;
})(window);
