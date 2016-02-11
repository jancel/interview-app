angular.module('app', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'login']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
      template: '<div ui-view=""></div>',
      controller: function ($log) {
        var vm = this;

        vm.ctrlName = 'AppCtrl';
        $log.debug(vm.ctrlName + ' -> Start');

        $log.debug(vm.ctrlName + ' -> End');
      },
      controllerAs: 'home'
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/login');

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
