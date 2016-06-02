var eventApp = angular.module('eventApp', ['EventCtrls', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
  })
  .state('showEvent', {
    url: '/events/:id',
    templateUrl: 'views/events.html',
    controller: 'EventShowCtrl'
  })

}]);