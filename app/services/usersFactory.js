// path to heroku
var baseURL = function() {
  // return "http://localhost:3000";
  return "http://frozen-crag-4960.herokuapp.com";
};

(function usersFactory() {

  // create users factory
  var usersFactory = function($http) {
    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function() {

      // allow access to the list of users
      return $http.get(baseURL() + '/users').success(function(response) {
        angular.copy(response, factory.users);
      });
    };

    factory.getUser = function(userId) {
      return $http.get(baseURL() + '/users/' + userId).success(function(response) {
        angular.copy(response, factory.user);
      });
    };

    return factory
  };

  usersFactory.$inject = ['$http'];

  angular.module('footballApp').factory('usersFactory', usersFactory);

})();
