app.controller('dailyReportController', function($scope, $http, $timeout, multiForm) {

	$scope.registerSuccessMssg = false;
	$scope.registerErrorMssg = false;
	$scope.dateFormatError = false;

	$scope.dailyReport = function () {
		var date = $scope.date;
		var d = date.split('-');
        date = d[1] + '/' + d[2] + '/' + d[0];
		var total = Number($scope.morningCash) + Number($scope.morningCoins) + Number($scope.eveningCash) + Number($scope.eveningCoins) + 
		Number($scope.lottoPaidOut) + Number($scope.vendorCoupons) + Number($scope.paidOut) + Number($scope.foodStamp) +
		Number($scope.creditCards) + Number($scope.refunds);
		var data = {
			'date': date,
			'morningCash': $scope.morningCash,
			'morningCoins': $scope.morningCoins,
			'eveningCash': $scope.eveningCash,
			'eveningCoins': $scope.eveningCoins,
			'lottoPaidOut': $scope.lottoPaidOut,
			'vendorCoupons': $scope.vendorCoupons,
			'paidOut': $scope.paidOut,
			'foodStamp': $scope.foodStamp,
			'creditCards': $scope.creditCards,
			'refunds': $scope.refunds,
			'total': total,
			'totalMopSale': $scope.totalMopSale
		}
		var resetSuccess = function () {
			$scope.registerSuccessMssg = false;
		}
	    var resetError = function () {
			$scope.registerErrorMssg = false;
		}
		console.log(data);
		$http.post("/dailyReports", data)
			.success(function(data, status) {

				$scope.date = "";
				$scope.morningCash = "";
				$scope.morningCoins = "";
				$scope.eveningCoins = "";
				$scope.eveningCash = "";
				$scope.lottoPaidOut = "";
				$scope.vendorCoupons = "";
				$scope.paidOut = "";
				$scope.foodStamp = "";
				$scope.creditCards = "";
				$scope.refunds = "";
				$scope.total = "";
				$scope.totalMopSale = "";
				$scope.registerSuccessMssg = true;

				$timeout(resetSuccess, 3000);
			})

			.error(function (error) {
				$scope.registerErrorMssg = true;
				$timeout(resetError, 3000);
			});

		var uploadUrl = '/images';
		multiForm.post(uploadUrl, $scope.dailyReportPicture)
			.success(function(data,status){
				console.log('Uploaded image successfully');
			}).error(function(error){
				console.log('Image not uploaded successfully');
			});

		var formData = new FormData;
		var file = $("#image")[0].files[0];
		formData.append('image',file);
		console.log(file, 'file...');

		//Uploading the image in the application folder 
		/*$http.post('/imagedetails',formData,{
			transformRequest : angular.identity,
			headers:{
				'Content-Type': undefined
			}
		}).then(function(res){

		});*/

		/*var formData = new FormData;
		var file = $("#image")[0].files[0];
		formData.append('image',file);
		console.log(file, 'file...');
		data = {
			'date' : date,
			'name' : file.name,
			'path' : ''
		}
		//Uploading the image in the application folder 
		$http.post('/imageDetails',data)
			.success(function(data,status){
				console.log('Images details uploaded');
			});*/
		
	}
	
});