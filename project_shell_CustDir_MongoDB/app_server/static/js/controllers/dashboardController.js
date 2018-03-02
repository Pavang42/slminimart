/*app.controller('dashboardController', function($scope,$location, Data) {

$scope.data = [
      {
        value: 300,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Red'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ];

});
*/

app.controller('dashboardController', function($scope,$location, Data, DailyReports) {

  $scope.dailyReports = function(){
    DailyReports.success(function(data){
        $scope.resources = data;
        createBarChart($scope.resources);
        //console.log($scope.resources);
    });
  }
  DailyReports.success(function(data){
        $scope.resources = data;
        createBarChart($scope.resources);
        //console.log($scope.resources);
    });


  function createBarChart(resources){
    var myCategories = [];
    var myData = [];
    for(var resource of resources){
      myCategories.push(resource.date);
      var totalCash = Number(resource.morningCash) + Number(resource.morningCoins) + Number(resource.eveningCash) + Number(resource.eveningCoins);
      myData.push(totalCash);
    }

    $scope.data = [{
      
          title: {
              text: 'Monthly Average Rainfall'
          },
          subtitle: {
              text: 'Source: WorldClimate.com'
          },
          xAxis: {
              categories: myCategories,
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Population (million)'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} million</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              },
              /*series: {
                  cursor: 'pointer',
                  point: {
                      events: {
                          click: function () {
                              getGDPData(this.category, countries);
                          }
                      }
                  }
              }*/
          },
          series: [{
              name: 'Population',
              data: myData
          }/*, {
              name: 'Area',
              data: myArea
          }*/
          ]
    }
    ];
    
    
  
  }

});
