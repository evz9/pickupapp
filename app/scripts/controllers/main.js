'use strict';

//Main controller for page

angular.module('pickupappApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.test = function() {
      $location.path('/games')

    }
    
  }).controller('HomeCtrl', function($scope) {

  }).controller('GamesCtrl', function($scope) {

  }).controller('GameIDCtrl', function($scope, $routeParams) {
    $scope.game = {};
    $scope.game.id = $routeParams.id;
  })