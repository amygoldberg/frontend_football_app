var app = angular.module('footballApp', ['ngRoute', 'appRoutes']);

app.run(function($http, $window) {
  var token = $window.localStorage.getItem('token');
  if (token) {
    $http.defaults.headers.common.Authorization = 'Token token=' + token;
  }
});
