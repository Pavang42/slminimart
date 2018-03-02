app.controller('dailyReports', function($scope,DailyReports,ShiftReports,$location, $http) {

	    $scope.noDailyReports = false;
		DailyReports.success(function(data){
            if(data.length == 0) {
				$scope.noDailyReports = true;
			} else {
				$scope.noDailyReports = false;
			}
    		$scope.resources = data;
    	});

        ShiftReports.success(function(data){
            $scope.shiftsData = data;
        })

        $scope.dailyReportofDate = function(){
            $scope.detailDailyReport = false;
            var date = $scope.date;
            var d = date.split('-');
            date = d[1] + '/' + d[2] + '/' + d[0];
            //console.log(date);
            if($scope.date == undefined){
                $scope.dateRequiredError = true;
                $scope.dateError = 'background-color:red; color:white; width : 110px;';
            }
            else{
                $scope.dateRequiredError = false;
                for(var dailyReport of $scope.resources){
                    if(dailyReport.date == date){
                        $scope.detailDailyReport = true;
                        $scope.dailyReportData = dailyReport;
                        if((parseFloat(dailyReport.total,10)- parseFloat(dailyReport.totalMopSale,10)) > 0 ){
                            $scope.differenceClass = 'background-color: green; color : white;';
                        }else {
                            $scope.differenceClass = 'background-color: red; color : white;';
                        }
                    }
                }
                for(var shiftData of $scope.shiftsData){
                    if(shiftData.date == date){
                        console.log("shiftData " + shiftData);
                        if(shiftData.shift == "morning")
                            $scope.morningShiftEmployee = shiftData.name;
                        else
                            $scope.eveningShiftEmployee = shiftData.name;
                    }
                }
            }
        }
    	/*$scope.detailedDailyReport = function(dailyData){
    		$scope.detailDailyReport = true;
    		$scope.dailyReportData = dailyData;
    		if((parseFloat(dailyData.total,10)- parseFloat(dailyData.totalMopSale,10)) > 0 ){
    			$scope.differenceClass = 'background-color: green; color : white;';
    		}else {
 
    			$scope.differenceClass = 'background-color: red; color : white;';
    		}
    	}*/

    	$scope.difference = function(total,totalMopSale){
            return (parseFloat(total,10)- parseFloat(totalMopSale,10)).toFixed(2);
    	}	
});