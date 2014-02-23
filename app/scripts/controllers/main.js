'use strict';

//Main controller for page


  
app.controller('MainCtrl', function ($scope, $location) {
	$scope.selections = {1: true, 3: true, 8: true};

    $scope.test = function() {
      $location.path('/games');

    }
    
  });

app.controller('HomeCtrl', function($scope) {

  });

app.controller('GamesCtrl', function($scope, $http, Game) {
	
	$scope.loaded = false;
	$scope.error = false;

	$http({method: 'GET', url: 'data/games.json'}).success(function(data) {
		$scope.loaded = true;
		$scope.games = data;
	}).error(function(data) {
		$scope.loaded = true;
		$scope.error = true;
	});



	/* Ignore this, but don't delete it! It may be useful in the future.

	$scope.submit = function() {
		
		 



		Game.query({foo: 'bar'}, function() {
			console.log('success');
		})

		Game.get({id: 3, foo: 'bar'}, function() {
			console.log('yay');
		})

		Game.update({id: 3, foo: 'bar'}, function() {
			console.log('success');
		}, function() {
			console.log('you phailed d00d');
		})

		
	}
	*/
});

app.controller('GameIDCtrl', function($scope, $routeParams) {
    $scope.game = {};
    $scope.game.id = $routeParams.id;
  });