app.controller('payoutController', function($scope, $http, $timeout, UserDetails) {

	$scope.registerSuccessMssg = false;
	$scope.registerErrorMssg = false;
	$scope.dateFormatError = false;

	UserDetails.success(function(data){
            $scope.userDetails = data;
        })

	$scope.submitPaymentDetails = function () {
		$http.get("/payDetails")
		.then(function(response){
			$scope.payDetails = response.data;
			for(var pay of $scope.payDetails){
				if(pay.username == $scope.name){
					//var total_pay = Number(pay.payTotal) + Number(pay.payPerHour * $scope.hours);
					//console.log(pay.username + " pay is " + total_pay);
					//console.log("total_pay" + total_pay);
					var payTaken = pay.payTaken + $scope.payTaken;
					var paymentDetail = {
						'username' : pay.username,
						'payPerHour' : pay.payPerHour,
						'payTotal' : pay.payTotal,
						'payTaken' : payTaken
					}
					$http.put("/payDetails/"+pay._id,paymentDetail)
						.success(function(data,status){
							console.log("Payment details updated");
						})
						.error(function(error){
							console.log("Error in updating payment details");
						});
				}
			}
		});
	}
});