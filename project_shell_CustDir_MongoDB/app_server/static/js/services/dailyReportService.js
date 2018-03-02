app.factory('DailyReports', function($http) {

 // var obj = {content:null};

   return $http.get('/dailyReports');
      
});
