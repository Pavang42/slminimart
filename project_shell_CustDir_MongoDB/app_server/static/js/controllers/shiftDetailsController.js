app.controller('shiftDetailsController', function($scope, $http,$timeout) {

	    $scope.updateShift = false;
	    $scope.shiftDetailSuccess = false;
	    $scope.shiftScheduleDetails = false;
	    $scope.dateFormatError = false;
	    $scope.individualShiftHour = false;
	    $scope.overallShifts = false;
	    //Fetching the users reports
	    $http.get("/users").
	    	then(function(response){
	    		$scope.employees = response.data;
	    	});
	    	//End of fetching shift report

	    $http.get("/shiftDetails")
	    		.then(function(response){
	    			$scope.shiftschedule = response.data;
	    		});

		$scope.createShiftDetails = function(){
	    	$scope.shiftScheduleDetails = false;
	    	$scope.updateShift = true;
	    }

	    $scope.submitShift = function(){
	    	var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
	    	var date = $scope.shiftDate;
            var d = date.split('-');
            date = d[1] + '/' + d[2] + '/' + d[0];
	    	$scope.dateFormatError = false;
	    	if(date_regex.test(date)){
		    	var shift = {
		    		'date' : date,
		    		'name' : $scope.name,
		    		'shift' : $scope.shift,
		    		'hours' : $scope.hours,
		    		'voidtickets' : $scope.voidTickets,
		    		'errorcorrections' : $scope.errorCorrections
		    	}
		    	var resetSuccess = function () {
					$scope.shiftDetailSuccess = false;
				}
				//Fetching payment details
	    		$http.get("/payDetails")
	    			.then(function(response){
	    				$scope.payDetails = response.data;
	    				for(var pay of $scope.payDetails){
							if(pay.username == $scope.name){
								console.log(pay.payTotal);
								console.log(pay.payPerHour * $scope.hours);
								var total_pay = Number(pay.payTotal) + Number(pay.payPerHour * $scope.hours);
								console.log(pay.username + " pay is " + total_pay);
								console.log("total_pay" + total_pay);
								var paymentDetail = {
									'username' : pay.username,
									'payPerHour' : pay.payPerHour,
									'payTotal' : total_pay,
									'payTaken' : pay.payTaken
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
	    		//End of fetching payment details
				
				$http.post("/shiftDetails", shift)
				.success(function(data, status) {
					$scope.date = "MM/DD/YYYY";
					$scope.shiftDetailSuccess = true;

					$timeout(resetSuccess, 3000);
				})
				.error(function (error) {
				
				});
			}
			else{
				$scope.dateFormatError = true;
			}
	    }

	    $scope.generateShiftDetails = function(){

	    	$scope.updateShift = false;
	    	$scope.shiftScheduleDetails = true;
	    	$scope.overallShifts = true;
	    	$scope.individualShiftHour = false;
	    }

	    $scope.generateEmployeeShiftDetail = function(employee_name){
	    	//var shifts = $scope.shiftschedule;
	    	$scope.payTotal = 0;
	    	$scope.payTaken = 0;
	    	$scope.payLeft = 0;
	    	$scope.individualShiftHours = 0;
	    	$scope.totalErrorCorrections = 0;
	    	$scope.totalVoidTickets = 0;
	    	$scope.overallShifts = false;
	    	$scope.individualShiftHour = true;
	    	$scope.employee_name = employee_name;
	    	for(var shift of $scope.shiftschedule) {
	    		if(shift.name == employee_name){
	    			$scope.individualShiftHours += shift.hours;
	    			shift.errorcorrections? ($scope.totalErrorCorrections  += shift.errorcorrections) : null;
	    			shift.voidtickets? ($scope.totalVoidTickets += shift.voidtickets) : null;
	    		}
	    	}
	    	//Fetching payment details
	    		$http.get("/payDetails")
	    			.then(function(response){
	    				$scope.payDetails = response.data;
	    				for(pay of $scope.payDetails){
				    		if(pay.username == employee_name) {
				    			if((parseFloat(pay.payTotal)-parseFloat(pay.payTaken)) > 0){
				    				$scope.differenceClass = 'background-color: green; color : white;';	
				    			}
				    			else{
				    				$scope.differenceClass = 'background-color: red; color : white;';
				    			}
				    			$scope.payTotal = pay.payTotal;
				    			$scope.payTaken = pay.payTaken;
				    			$scope.payLeft = parseFloat(parseFloat(pay.payTotal) - parseFloat(pay.payTaken)).toFixed(2);
				    		}
				    	}
	    			});
	    		//End of fetching payment details
	    	
	    	//console.log(shifts);
	    }
	    $scope.generatingShiftDetails = function(){
	    	var date = $scope.shiftDetailsDate;
	    	console.log(date);
	    	var d = date.split('-');
            date = d[1] + '/' + d[2] + '/' + d[0];
            //Fetching the shift details
            $http.get("/shiftDetails")
	    		.then(function(response){
	    			var shifts = [];
	    			var shiftDetails = response.data;
	    			for(var shift of shiftDetails){
	    				if(shift.date == date){
	    					shifts.push(shift);
	    				}
	    			}
	    			$scope.shiftsSchedule = shifts;
	    		});
	    	//End of fetching the shift details of particular day

	    	$scope.updateShift = false;
	    	$scope.shiftScheduleDetails = true;
	    	$scope.overallShifts = true;
	    	$scope.individualShiftHour = false;

	    }
	
});