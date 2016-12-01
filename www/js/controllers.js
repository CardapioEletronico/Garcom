angular.module('app.controllers', [])

.controller('inicioTabDefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pedidosDefaultPageCtrl', function ($scope, $stateParams, $http) {   // TIP: Access Route Parameters for your page via $stateParams.parameterName
  $http.get('http://10.21.0.137/20131011110061/api/itempedido').
  then(function(response) {
    var eae = response.data;
    console.log("Rabo");
    console.log(eae);
    $scope.itempedidos = response.data;

  });

})

.controller('mesasDefaultPageCtrl', function ($scope,$http) // TIP: Access Route Parameters for your page via $stateParams.parameterName
{
  $http.get('http://10.21.0.137/20131011110061/api/mesa').
  then(function(response) {
    var eae = response.data;
    console.log("Rabo");
    console.log(eae);
    $scope.mesas = response.data;

  });


})

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
