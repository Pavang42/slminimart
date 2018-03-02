
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs','ngAnimate','ng-slide-down']);

app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/dashboard', {
	    controller: 'dashboardController',
        templateUrl: '/partials/dashboard.html'
    })
	.when('/edit', {
	    controller: 'newController',
        templateUrl: '/partials/edit.html'
    })
	.when('/back', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
     .when('/register', {
          controller: 'registerController',
          templateUrl: '/partials/register.html'
     })
    .when('/resources', {
        controller: 'resourcesController',
        templateUrl: '/partials/resources.html'
    })
    .when('/dailyreport', {
        controller: 'dailyReportController',
        templateUrl: '/partials/dailyReport.html'
    })
    .when('/dailyreports',{
        controller: 'dailyReports',
        templateUrl: '/partials/dailyReports.html'
    })
    .when('/shiftDetails',{
        controller: 'shiftDetailsController',
        templateUrl: '/partials/shiftDetails.html'
    })
    .when('/weeklyReports',{
        controller: 'weeklyReportsController',
        templateUrl: '/partials/weeklyReports.html'
    })
    .when('/payOuts',{
        controller: 'payoutController',
        templateUrl: '/partials/payouts.html'
    });

});

//resources
/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
