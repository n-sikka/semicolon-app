(function(){
  angular
    .module('semicolon')
    .controller( 'MainCtrl', controller);

  function controller($http, $log) {
    var vm = this;

    vm.company = "Semicolon Inc.";

    vm.getTech = function() {
      $http.get('config/data/tech.json').then(function success(response){
        vm.technologies = response.data;
      }, function error(response){
          $log.error(resonse.statusText);
      })
    }
  }
})();
