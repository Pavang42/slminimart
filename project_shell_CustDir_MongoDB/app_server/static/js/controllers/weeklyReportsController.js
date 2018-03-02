app.controller('weeklyReportsController', function($scope, DailyReports, $http,$timeout) {

	    $scope.detailWeekReport = false;
	    //Generating the weekly reports	

	    $http.get('/dailyReports')
	    	.then(function(response){
	   			weekly_reports = response.data;
	   			weekly_reports.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date);
                    
                });
		   		var day_num = 0;
		   		var morningCash = 0, morningCoins = 0, eveningCoins = 0, eveningCash = 0, startDate, endDate;
		   		var lottoPaidOut = 0, vendorCoupons = 0, paidOut = 0, foodStamp = 0, creditCards = 0, total =0, totalMopSale =0;
		   		var weeklyReports = [], totalCash = 0, totalCoins = 0;
		   		for( weekly_report of weekly_reports){
		   			day_num++;
		   			//console.log(day_num);
		   			if((day_num % 7 ) == 1){
		   				startDate = weekly_report.date;
		   			}
		   			else if((day_num % 7 ) == 0){
		   				endDate = weekly_report.date;
		   			}
		   			morningCash += parseFloat(weekly_report.morningCash);
		   			morningCoins += parseFloat(weekly_report.morningCoins);
		   			eveningCoins += parseFloat(weekly_report.eveningCoins);
		   			eveningCash += parseFloat(weekly_report.eveningCash);
		   			lottoPaidOut += parseFloat(weekly_report.lottoPaidOut);
		   			vendorCoupons += parseFloat(weekly_report.vendorCoupons);
		   			paidOut += parseFloat(weekly_report.paidOut);
		   			foodStamp += parseFloat(weekly_report.foodStamp);
		   			creditCards += parseFloat(weekly_report.creditCards);
		   			total += parseFloat(weekly_report.total);
		   			totalMopSale += parseFloat(weekly_report.totalMopSale);

		   			if(( day_num % 7  == 0) && (day_num !=0)) {
		   				totalCash = parseFloat(morningCash) + parseFloat(eveningCash);
		   				totalCoins = parseFloat(morningCoins) + parseFloat(eveningCoins);
		   				var weekReport  = {
		   					
		   					"startDate" : startDate,
		   					"endDate" : endDate,
		   					"morningCash" : morningCash.toFixed(2),
		   					"morningCoins" : morningCoins.toFixed(2),
		   					"eveningCoins" : eveningCoins.toFixed(2),
		   					"eveningCash" : eveningCash.toFixed(2),
		   					"lottoPaidOut" : lottoPaidOut.toFixed(2),
		   					"vendorCoupons" : vendorCoupons.toFixed(2),
		   					"paidOut" : paidOut.toFixed(2),
		   					"foodStamp" : foodStamp.toFixed(2),
		   					"creditCards" : creditCards.toFixed(2),
		   					"totalCash" : totalCash.toFixed(2),
		   					"totalCoins" : totalCoins.toFixed(2),
		   					"total" : total.toFixed(2),
		   					"totalMopSale" : totalMopSale.toFixed(2)
		   				};
		   				weeklyReports.push(weekReport);
		   				morningCash = 0; morningCoins = 0; eveningCoins = 0; eveningCash = 0, totalCoins = 0, totalCash = 0;
		   				lottoPaidOut = 0; vendorCoupons = 0; paidOut = 0; foodStamp = 0; creditCards = 0; total =0; totalMopSale =0; day_num = 0;
		   			}
		   			
		   		}
		   		$scope.weeklyReports = weeklyReports;
	   	});
	   	//Completed generating weekly reports

	   	//Button Click generate Weekly Report
	   	/*$scope.detailWeeklyReport = function(weekReport){
	   		$scope.weeklyReportData = weekReport;
	   		$scope.detailWeekReport = true;
	   		if((parseFloat(weekReport.total,10)- parseFloat(weekReport.totalMopSale,10)) > 0 ){
    			$scope.differenceClass = 'background-color: green; color : white;';
    		}else {
 
    			$scope.differenceClass = 'background-color: red; color : white;';
    		}
	   	}*/
	   	//End of generating the weekly report on button click

	   	//On select change generate the weekly report
	   	$scope.detailWeeklyReports = function(){
	   		var week_report = JSON.parse($scope.week);
	   		$scope.weeklyReportData = week_report;
	   		$scope.detailWeekReport = true;
	   		if((parseFloat(week_report.total,10)- parseFloat(week_report.totalMopSale,10)) > 0 ){
    			$scope.differenceClass = 'background-color: green; color : white;';
    		}else {
 
    			$scope.differenceClass = 'background-color: red; color : white;';
    		}
	   	}
	   	//End of generating the weekly report on button click

	   	$scope.difference = function(total,totalMopSale){
	   		return (parseFloat(total,10)- parseFloat(totalMopSale,10)).toFixed(2);
	   	}
	});