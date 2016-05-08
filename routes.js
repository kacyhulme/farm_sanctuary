(function() {
	angular.module('farmSanctuary')
	.config(function($routeProvider){
		$routeProvider.when('/catalog-view', {
			templateUrl: 'catalog-view.html'
		})
		.when('/visit-view', {
			templateUrl: 'visit-view.html'
		})
		.when('/make-donation', {
			templateUrl: 'make-donation.html'
		})
		.otherwise( {redirectTo: '/' });
	});
})();