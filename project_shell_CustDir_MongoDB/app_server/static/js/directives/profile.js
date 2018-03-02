app.directive('profile', function($http) {
    return {
        restrict: 'AE',
        scope: {
            data: '=resourceData',
            refresh:'&'
        },
        link: function(scope, element, attrs) {
             scope.expanded = false;
             scope.editMode = false;

            scope.detailProfile = function () {
                scope.editMode = true;
            }

            scope.detailProfileDone = function () {
                scope.editMode = false;
            }

            scope.deleteUser = function (id) {
                $http.delete('/users/' + id)
                    .success(function(data) {
                    //    $scope.todos = data;
                        alert('Delete Done');
                        scope.refresh();

                        console.log(data);
                    })
                    .error(function(data) {
                        alert('Delete ERROR!');
                        console.log('Error: ' + data);
                    });
            }
        },
        templateUrl: 'templates/profile.html'

    };
});
