angular.module('pickupappApp')
	.directive('game', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/directive-game.html',
			scope: {
				details: '=',
			},
			controller: function($scope, $http) {
				$http.get('/data/games.json').then(function (response) {
			    	$scope.games = response.data;
			    });

				$scope.activeSearch = '';
				$scope.search = function() {
			        $scope.activeSearch = $scope.searchText;
			     }
			}
	}
});