(function(){
	'use strict';

	angular
		.module('semicolon')
		.directive('navbar', nav);

		function nav(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/navbar/navbar.html'
			};
			return directive;
		}
})();
