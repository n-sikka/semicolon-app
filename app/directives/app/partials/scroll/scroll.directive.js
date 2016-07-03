(function(){
  angular
    .module('semicolon')
    .directive('scroll', function(){
      $('a[href^="#"]').click(function() {
          $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
          $(this).addClass('active');
          return false;
          e.preventDefault();
      });
  });
})();
