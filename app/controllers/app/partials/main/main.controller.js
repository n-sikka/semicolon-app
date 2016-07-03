(function(){
  angular
    .module('semicolon')
    .controller( 'MainCtrl', controller);

  function controller($scope, $log, $http) {

    $scope.company = "Semicolon Inc.";

  }
})();
