// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','angular-loading-bar'])

.controller('consultaCtrl',function($scope, $http){
  var data = new Date();
  
  $scope.listshow =false;
  $scope.form ={Matricula:"", Mes:data.getMonth()+1, Ano: data.getFullYear()};

  $scope.doAlert = function(){
      switch ($scope.form.Mes){
      case 1:
        mes = "01";
        break;
      case 2:
        mes = "02";
        break;
      case 3:
        mes = "03";
        break;
      case 4:
        mes = "04";
        break;
      case 5:
        mes = "05";
        break;
      case 6:
        mes = "06";
        break;
      case 7:
        mes = "07";
        break;
      case 8:
        mes = "08";
        break;
      case 9:
        mes = "09";
        break;
      case 10:
        mes = "10";
        break;
      case 11:
        mes = "11";
        break;
      case 12:
        mes = "12";
        break;
    }
    
    $http.get('http://wrsolucoesinformatica.com/server-ponto.php?tx_matricula='+ $scope.form.Matricula +'&tx_mes_periodo='+ mes +'&tx_ano_periodo='+ $scope.form.Ano)
    .then(function (response) {
      if(response.data.OK==true){
        $scope.dados = response.data;
        $scope.Nome = 'SERVIDOR: '+response.data.nome;
        $scope.listshow =true;
      }else{
        $scope.listshow =false;
        $scope.Nome = 'SERVIDOR NÃO ENCONTRADO';
      }
    });
  }

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
 
})
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
  }])
