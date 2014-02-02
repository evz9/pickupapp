'use strict';

//Main controller for page

var app = angular.module('pickupappApp');
  
app.controller('MainCtrl', function ($scope, $location) {

    $scope.test = function() {
      $location.path('/games');

    }
    
  });

app.controller('HomeCtrl', function($scope) {

  });

app.controller('GamesCtrl', function($scope) {

  });

app.controller('GameIDCtrl', function($scope, $routeParams) {
    $scope.game = {};
    $scope.game.id = $routeParams.id;
  });