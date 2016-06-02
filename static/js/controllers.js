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
  }, function error(data){
      console.log(data);
    })
  }])


}])

// trying to add in the open, toggle, modal animation

.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

})

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
// =======
// }]);







