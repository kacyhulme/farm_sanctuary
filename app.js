(function() {
  var app = angular.module('farmSanctuary', []);

  app.controller('FarmController', ['$http', function($http){
    var farm = this;
    farm.animals = [];

    $http.get('/animals.json').success(function(data) {
        console.log(data);
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

  app.controller('MenuController', function() {
    this.donation = false;
    //this function is setting which is why there is no "return"
    this.selectTab = function(setTab) {
      this.donation = setTab;
    };
    //this function is asking which is why there is a "return"
    this.isSelected = function(checkTab){
      return this.donation == checkTab;
    }
  });

  app.directive('cowStats', function() {
    return {
      restrict: 'E',
      templateUrl: 'cow-stats.html'
    };
  });
})();


