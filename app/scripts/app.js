'use strict';

angular.module('pickupappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'HomeCtrl',
          templateUrl: 'views/main.html',
        })
        .when('/add', {
          templateUrl: 'views/create-game.html',
        })
        .when('/games', {
          templateUrl: 'views/games.html',
          controller: 'GamesCtrl'
        })
        .when('/games/:id', {
          templateUrl: 'views/gameDetails.html',
          controller: 'GameIDCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });
    });

var app = angular.module('pickupappApp');

//Angular resources for retrieving models
//Use query for searches without passing in an ID!

app.factory('User', ['$resource', function($resource) {
  return $resource('/user/:id', {id: '@id'},
  {
    'update': {method: 'PUT'}
  });
}]);

app.factory('Game', ['$resource', function($resource) {
  return $resource('/game/:id', {id: '@id'},
  {
    'update': {method: 'PUT'}
  });
}]);