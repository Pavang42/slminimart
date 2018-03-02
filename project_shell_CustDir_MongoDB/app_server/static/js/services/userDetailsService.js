app.factory('UserDetails', function($http) {
  return $http.get('/users');
});
