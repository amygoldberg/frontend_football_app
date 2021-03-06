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
          .when('/game_weeks', {
            controller: 'gameWeeksController',
            controllerAs: 'gameWeeksCtrl',
            templateUrl: 'app/views/gameWeek.html'
          })
          .when('/login', {
            controller: 'authCtrl',
            controllerAs: 'authCtrl',
            templateUrl: 'app/views/home.html'
          })
          .when('/register', {
            controller: 'authCtrl',
            controllerAs: 'authCtrl',
            templateUrl: 'app/views/home.html'
          })
          .when('/createGameWeek', {
            controller: 'gameWeeksController',
            controllerAs: 'gameWeeksCtrl',
            templateUrl: 'app/views/newGameWeek.html'
          })
          .when('/editUserDetails', {
            controller: 'gameWeeksController',
            controllerAs: 'gameWeeksCtrl',
            templateUrl: 'app/views/editUserDetails.html'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
})();
