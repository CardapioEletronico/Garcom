angular.module('app.controllers', [])

.controller('inicioTabDefaultPageCtrl',function ($scope, $http, $stateParams) {

  var config = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  }

  var data = {
    Mesa: 3,
    Cliente: =Math.floor(Math.random()*9000) + 1000
  };
  //
  // var pqp =Math.floor(Math.random()*9000) + 1000;
  // console.log(pqp);
  //
  $scope.postAbertura = function(){
    $http.post('http://10.21.0.137/20131011110061/api/abertura', data, config)
      .success(function(data,status,headers,config){
        $scope.PostDataResponse = data;
      })
      .error(function (data, status, header, config) {
        $scope.ResponseDetails = "Data: " + data +
        "<hr />status: " + status +
        "<hr />headers: " + header +
        "<hr />config: " + config;
      });

  };




})

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
