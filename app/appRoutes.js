(function appRoutesIIFE() {
  angular.module('appRoutes', [])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        //home page
        .when('/', {
          templateUrl: 'app/views/home.html'
        })
          .when('/users', {
            controller: 'usersController',
            controllerAs: 'usersCtrl',
            templateUrl: 'app/views/users.html'
          })
          .when('/users/:userId', {
            controller: 'gameWeeksController',
            controllerAs: 'gameWeeksCtrl',
            templateUrl: 'app/views/gameWeek.html'
          })
          .when('/login', {
            controller: 'authCtrl',
            controllerAs: 'authCtrl',
            templateUrl: 'app/views/login.html'
          })
          .when('/register', {
            controller: 'authCtrl',
            controllerAs: 'authCtrl',
            templateUrl: 'app/views/register.html'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
})();
