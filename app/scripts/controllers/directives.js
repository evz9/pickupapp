angular.module('pickupappApp')
	.directive('gameFilter', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/game-filter-partial.html',
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