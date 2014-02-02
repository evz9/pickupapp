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