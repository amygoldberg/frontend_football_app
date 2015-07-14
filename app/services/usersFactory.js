(function usersFactory() {

  // create users factory
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {

      // allow access to the list of users
      return $http.get('http://localhost:3000/users').success(function(response) {
        angular.copy(response, factory.users);
      });
    };

    factory.getUser = function(userId) {
      return $http.get('http://localhost:3000/users/' + userId).success(function(response) {
        angular.copy(response, factory.user);
      });
    };

    return factory
  };

  usersFactory.$inject = ['$http'];

  angular.module('footballApp').factory('usersFactory', usersFactory);

})();
