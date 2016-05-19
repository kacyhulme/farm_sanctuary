(function() {
  var app = angular.module('farmSanctuary', ['ngRoute']);

  app.controller('FarmController', ['$http', function($http){
    var farm = this;
    farm.animals = [];

    $http.get('/animals.json').success(function(data) {
        farm.animals = data;
    });
  }]);

  app.controller('AdoptionController', function() {
  	this.firstName = "firstName";
  	this.lastName = "lastName";
  });

  app.controller('PanelController', function() {
  	this.tab = 1;
  	//this function is setting which is why there is no "return"
  	this.selectTab = function(setTab) {
  		this.tab = setTab;
  	};
  	//this function is asking which is why there is a "return"
  	this.isSelected = function(checkTab){
  		return this.tab == checkTab;
  	}
  });

  app.controller('CommentController', function() {
  	this.comment = {};
  	this.addComment = function(animal) {
  		animal.comments.push(this.comment);
  		this.comment = {};
  	}
  });

  app.controller('MenuController', ['$http', function($http) {
    this.donation = false;
    //this function is setting which is why there is no "return"
    this.selectTab = function(setTab) {
      this.donation = setTab;
    };
    //this function is asking which is why there is a "return"
    this.isSelected = function(checkTab){
      return this.donation == checkTab;
    };
  }]);

  app.directive('cowStats', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/cow-stats.html'
    };
  });

  app.directive('commentForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/comment-form.html'
    };
  });

  app.directive('menu', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/menu.html'
    };
  });

  app.directive('panels', function() {
     return {
      restrict: 'E',
      templateUrl: 'templates/panels.html'
    };
  });
})();


