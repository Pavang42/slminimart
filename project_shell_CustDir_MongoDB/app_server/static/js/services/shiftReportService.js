app.factory('ShiftReports', function($http) {

 // var obj = {content:null};

   return $http.get('/shiftDetails');
      
});
