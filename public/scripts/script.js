var myApp = angular.module('myApp', []);

myApp.controller('AssignmentController', function($http) {
  console.log('NG');

  var vm = this;

  vm.allRecords = [];

  // function to add a record (all four inputs)
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

  // function to get all records from db
  vm.getAll = function(){
    console.log('in getAll');

    $http({
      method: 'GET',
      url: '/assignments',
    }).then(function(response) {
      console.log(response.data);
      vm.allRecords = response.data;
    });
  }; //end getAll

  vm.search = function() {
    console.log('in search');
    $http({
      method: 'GET',
      url: '/assignments/:name?'
    }).then(function(response){
      console.log(response.data);
    });
  }; // end search function

}); // end controller
