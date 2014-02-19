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
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/games/:id', {
        templateUrl: 'views/gameDetails.html',
        controller: 'GameIDCtrl',
      })
       .when('/newGame', {
        templateUrl: 'views/newGame.html',
        controller: 'newGameCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
