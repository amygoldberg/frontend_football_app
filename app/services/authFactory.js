// path to heroku
// var baseURL = function() {
//   // return "http://localhost:3000";
//   return "http://frozen-crag-4960.herokuapp.com";
// };

angular.module('footballApp').factory('authFactory', authFactory);

authFactory.$inject = ['$http', '$location', '$window'];

function authFactory($http, $location, $window) {
  var currentUser = {};

  var login = function(credentials) {
    return $http.post('http://localhost:3000/login', credentials).success(function(response) {
      angular.copy(response, currentUser);
      $window.localStorage.setItem('token', response.token);
      $http.defaults.headers.common.Authorization = 'Token token=' + response.token;
      window.location.replace('http://localhost:3000/#/game_weeks');
    });
  };

  var register = function(credentials) {

    return $http.post('http://localhost:3000/register', credentials).success(function(response) {
      angular.copy(response, currentUser);
      $window.localStorage.setItem('token', response.token);
      $http.defaults.headers.common.Authorization = 'Token token=' + response.token;
      window.location.replace('http://localhost:3000/#/game_weeks');
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
    register: register,
    logout: logout,
    currentUser: currentUser,
    isLoggedIn: isLoggedIn
  };

};
