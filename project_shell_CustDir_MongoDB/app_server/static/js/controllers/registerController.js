app.controller('registerController', function($scope, Data,$location, $http, $timeout) {

	$scope.registerSuccessMssg = false;
	$scope.registerErrorMssg = false;

	$scope.register = function () {
		var data = {
			'firstname': $scope.firstname,
			'lastname': $scope.lastname,
			'username': $scope.user_name,
			'password': $scope.password
		}
		var resetSuccess = function () {
			$scope.registerSuccessMssg = false;
		}
	    var resetError = function () {
			$scope.registerErrorMssg = false;
		}
		var payment = {
			'username' : $scope.user_name,
			'payPerHour' : 7,
			'payTotal' : 0,
			'payTaken' : 0
		}

		$http.post("/payDetails", payment)
			.success(function(data, status){
				console.log("Payment details have been entered successfully");
			})
			.error(function(error){
				console.log("Error in inserting the payment details");
			});
		
		$http.post("/users", data)
			.success(function(data, status) {
				$scope.firstname = "";
				$scope.lastname = "";
				$scope.user_name = "";
				$scope.password = "";
				$scope.registerSuccessMssg = true;

				$timeout(resetSuccess, 3000);
			})

			.error(function (error) {
				$scope.registerErrorMssg = true;
				$timeout(resetError, 3000);
			});
	}	
});