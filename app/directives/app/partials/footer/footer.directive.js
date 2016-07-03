(function(){
	'use strict';

	angular
		.module('semicolon')
		.directive('socialFooter', foot);

		function foot(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/footer/footer.html'
			};
			return directive;
		}
})();
