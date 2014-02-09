angular.module('pickupappApp')
	.directive('game', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/directive-game.html',
			scope: {
				details: '=',
			},
			controller: function($scope, $http) {
				$scope.commentsLoaded = false;

				$scope.getDetails = function() {
					$(".details_" + $scope.details.id).slideToggle();

					//Dummy comment data
					$scope.commentsLoaded = true;
					$scope.comments = [
						{name: 'Alex McPerson', message: 'd00d let us do tha sport'},
						{name: 'Ben tha kool guy', message: 'ya lets go'},
						{name: 'Mike Awesome', message: 'i can bench 200 w my pinky finger'}
					];

				}
			}
	}
});