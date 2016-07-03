(function() {
  'use strict';

  angular
    .module('semicolon')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    var _dirPath = 'app/views/app/';

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: _dirPath + 'pages/home/home.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      });

  }

})();
