angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.inicioTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicioTabDefaultPage.html',
        controller: 'inicioTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.pedidosDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/pedidosDefaultPage.html',
        controller: 'pedidosDefaultPageCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mesasDefaultPage'
      2) Using $state.go programatically:
        $state.go('tabsController.mesasDefaultPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.mesasDefaultPage', {
    url: '/page4',
    views: {
      // 'tab1': {
      //   templateUrl: 'templates/mesasDefaultPage.html',
      //   controller: 'mesasDefaultPageCtrl'
      // },
      'tab3': {
        templateUrl: 'templates/mesasDefaultPage.html',
        controller: 'mesasDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')



});
