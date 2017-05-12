var myApp = angular.module('myApp', []);

myApp.controller('AssignmentController', function() {
  console.log('NG');

  var vm = this;

  vm.addAssignment = function(){
    console.log('add button clicked');

    var objectToSend = {
      assignment: vm.assignmentIn,
      name: vm.nameIn,
      score: vm.scoreIn,
      date_completed: vm.date_completedIn
    }; // end objectToSend
    console.log('this is objectToSend', objectToSend);
    
  }; // end getAssignment


}); // end controller
