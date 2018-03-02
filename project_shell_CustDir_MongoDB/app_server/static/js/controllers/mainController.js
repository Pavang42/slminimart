app.controller('mainController', function($scope, Data,$location, $http) {

	/*$http.get("http://127.0.0.1:27017/workforce/")
		.then(function(response) {
			console.log("In main controller " +response);
			debugger;
		//	$scope.myWelcome = response.data;
		});
 */
    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
  
	$scope.goToEdit = function(){
		$location.path("/edit");
	}
	
});