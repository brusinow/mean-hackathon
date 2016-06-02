var eventApp = angular.module('eventApp', ['EventCtrls', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
  });