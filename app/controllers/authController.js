angular.module('footballApp').controller('authCtrl', authCtrl);

authCtrl.$inject = ['$location', 'authFactory'];

function authCtrl($location, authFactory) {
  var vm = this;
  vm.credentials = {};

  vm.login = function(credentials) {
    authFactory.login(credentials).then(function(response) {
      vm.credentials = {};
      $location.path('');
    });
  };

  vm.logout = function() {
    authFactory.logout();
  };
  vm.isLoggedIn = function() {
    return authFactory.isLoggedIn();
  };
};
