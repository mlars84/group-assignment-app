var myApp = angular.module('myApp', []);

myApp.controller('AssignmentController', function($http) {
  console.log('NG');

  var vm = this;

  vm.allRecords = [];

  vm.addAssignment = function(){
    console.log('add button clicked');

    var objectToSend = {
      assignment: vm.assignmentIn,
      name: vm.nameIn,
      score: vm.scoreIn,
      date_completed: vm.date_completedIn
    }; // end objectToSend
    console.log('this is objectToSend', objectToSend);
    $http({
      method: 'POST',
      url: '/assignments',
      data: objectToSend
    }).then(function(response) {
      console.log(response.statusText);
    });
  }; // end addAssignment

  vm.getAll = function(){
    console.log('in getAll');

    $http({
      method: 'GET',
      url: '/assignments',
    }).then(function(response) {
      console.log(response.data);
      vm.allRecords = response.data;
    });
  };

}); // end controller
