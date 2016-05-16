(function() {
	angular.module('farmSanctuary')
	.config(function($routeProvider){
		$routeProvider.when('/views/catalog-view', {
			templateUrl: 'views/catalog-view.html'
		})
		.when('/views/schedule-visit-view', {
			templateUrl: 'views/schedule-visit-view.html'
		})
		.when('/views/make-donation-view', {
			templateUrl: 'views/make-donation-view.html'
		})
		.otherwise( {redirectTo: '/' });
	});
})();