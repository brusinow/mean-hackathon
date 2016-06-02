angular.module('EventCtrls', ['EventsServices'])

eventApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  // does our api  call
  $http({url: '/api'}).then(function success(data){
    $scope.data = data;
    // console.log(data);
    return $http({url: '/api/results'}).then(function success(results){
      $scope.results = results.data;
      console.log("RESULTS ARE: ",results.data);
    }, function error(error){
      console.log('error!');
    })
  }, function error(error){
    $scope.error = error;
  });

eventApp.controller('EventShowCtrl', ['$scope', '$stateParams', 'Events', 
    function($scope, $stateParams, Events){

  $scope.event = {};
  Events.get({id: $stateParams.id}, function success(data){
    $scope.event = data;
  }, 
    function error(data){
      console.log(data);
    })


  }])

}]);






