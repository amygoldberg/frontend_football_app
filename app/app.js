var app = angular.module('footballApp', ['ngRoute', 'appRoutes']);

app.run(function($window, $http) {
  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];
  var token = $window.localStorage.getItem('token');
  if (token) {
    $http.defaults.headers.common.Authorization = 'Token token=' + token;
  }
});
