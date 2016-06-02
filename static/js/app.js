var eventApp = angular.module('eventApp', []);
eventApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  // does our api  call
  $http({url: '/api'}).then(function success(data){
    $scope.data = data;
    console.log(data);
  }, function error(error){
    $scope.error = error;
  })
  

}]);