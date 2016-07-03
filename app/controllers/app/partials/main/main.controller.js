(function(){
  angular
    .module('semicolon')
    .controller( 'MainCtrl', controller);

  function controller() {
    var vm = this;

    vm.company = "Semicolon Inc.";
  }
})();
