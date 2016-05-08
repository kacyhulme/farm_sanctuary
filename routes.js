(function() {
	angular.module('farmSanctuary')
	.config(function($routeProvider){
		$routeProvider.when('/catalog-view', {
			templateUrl: 'catalog-view.html'
		})
		.when('/schedule-visit-view', {
			templateUrl: 'schedule-visit-view.html'
		})
		.when('/make-donation-view', {
			templateUrl: 'make-donation-view.html'
		})
		.otherwise( {redirectTo: '/' });
	});
})();