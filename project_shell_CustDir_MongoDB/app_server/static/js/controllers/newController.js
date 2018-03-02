app.controller('newController', function($scope,$location, Data) {
   //$scope.employees = Data.employees;

    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
	
	$scope.addUser = function(){
     	 $scope.newEmp = {
			"name": $scope.newName,
			"class": $scope.newSkill,
            "address":$scope.newAddress
	      };
	 // $scope.employees.push($scope.newEmp);
	   $location.path("/");
	}
	
});