angular.module('login', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('login').config(function($stateProvider) {
    $stateProvider.state('app.login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      resolve: {
        bank: function (institution) {
          return institution.get();
        }
      }
    });

    /* Add New States Above */

});

