(function () {
  'use strict';

  function LoginCtrl($log, bank) {
    var vm = this;

    vm.ctrlName = 'LoginCtrl';
    $log.debug(vm.ctrlName + ' -> Start');

    vm.bank = bank;
    $log.debug('bank: ', bank);


    vm.sayHello = function () {
      alert('Hello: ' + vm.hello);
    };

    vm.submit = function () {
      $log.debug('The form submitted is: ', vm.form);
    };

    $log.debug(vm.ctrlName + ' -> End');
  }

  angular.module('app').controller('LoginCtrl', LoginCtrl);
})();