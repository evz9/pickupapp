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

  }).controller('newGameCtrl', function($scope) {
       $scope.submitForm=function(){
          console.log($scope.newGame)
       }
       $scope.checkParticipants = function() {
          alert($scope.participants)
       }
       $scope.games = [
       {sport: 'Soccer'},
       {sport: 'Basketball'},
       {sport: 'Football'},
       {sport: 'Badminton'} 
       ]

       $scope.location = [
       {name: 'SPAC'},
       {name: 'Blom'},
       {name: 'Patten'},
       {name: 'Deering'},
       {name: 'Lake Side Fields'}
       ]

  })