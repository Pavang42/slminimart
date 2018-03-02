app.controller('resourcesController', function($scope, $http) {

	    $scope.noUsersFound = false;

	    $scope.getResources  = function () {
			$http.get("/users")
				.then(function(response) {

					if(response.data.length == 0) {
						$scope.noUsersFound = true;
					} else {
						$scope.noUsersFound = false;
					}
					$scope.resources = response.data;

				});
		}

    	$scope.getResources();
	
});