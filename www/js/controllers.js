angular.module('app.controllers', [])

.controller('inicioTabDefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pedidosDefaultPageCtrl', function ($scope, $stateParams, $http) {   // TIP: Access Route Parameters for your page via $stateParams.parameterName
  $http.get('http://10.21.0.137/20131011110061/api/itempedidoproduto').
  then(function(response) {
    var eae = response.data;
    var key,length= 0;
    var tabaco = [];
    var count=0;
    for(key in eae) {
      if(eae.hasOwnProperty(key)){
      length++;
      }
    }
    for(var i =0;i< length;i++){

    if(eae[i].Situacao== 2){
      count++
      tabaco.push(eae[i]);

    }
  }


    console.log(eae);
    $scope.itempedidoprodutos = tabaco;

  })

  $scope.remove = function($index){

    $scope.itempedidos.splice($index, 1);
  }

})

.controller('mesasDefaultPageCtrl', function ($scope,$http) // TIP: Access Route Parameters for your page via $stateParams.parameterName
{
  $http.get('http://10.21.0.137/20131011110061/api/mesa').
  then(function(response) {
    var eae = response.data;

    console.log(eae);
    $scope.mesas = response.data;

  })

  $scope.remove = function($index){

    $scope.mesas.splice($index, 1);
  }


})

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
