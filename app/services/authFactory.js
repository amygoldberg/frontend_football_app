angular.module('footballApp').factory('authFactory', authFactory);

authFactory.$inject = ['$http', '$location', '$window'];

function authFactory($http, $location, $window) {
  var currentUser = {};

  var login = function(credentials) {

    return $http.post('http://localhost:3000/login', credentials).success(function(response) {
      angular.copy(response, currentUser);
      $window.localStorage.setItem('token', response.token);
      $http.defaults.headers.common.Authorization = 'Token token=' + response.token;
      window.location.replace('http://localhost:5000/#/users/' + response.id);
    });
  };

  var logout = function() {
    $window.localStorage.removeItem('token');
    $location.path('/login');
  };


  var isLoggedIn = function() {
    var data = $window.localStorage.getItem('token');
    if (data) {
      return true;
    } else {
      return false;
    };
  };

  return {
    login: login,
    logout: logout,
    currentUser: currentUser,
    isLoggedIn: isLoggedIn
  };

};
