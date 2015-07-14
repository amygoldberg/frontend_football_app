(function gameWeeksFactory() {

  // create users' game weeks factory
  var gameWeeksFactory = function($http) {
    var factory = {};
    factory.gameWeeks = [];
    factory.gameWeek = {};

    factory.getGameWeeks = function(userId) {

      // allow access to the user's list of game weeks
      return $http {
        (
          method: "get",
          url: "http://localhost:3000/users" + userId,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }).success(function(response) {
        angular.copy(response.user.gameWeeks, factory.gameWeeks);
      });
    };

    factory.getGameWeek = function(gameWeekId) {
      return $http.get('http://localhost:3000/game_weeks/' + gameWeekId).success(function(response) {
        angular.copy(response, factory.gameWeek);
      });
    };

    return factory;
  };

  gameWeeksFactory.$inject = ['$http'];

  angular.module('footballApp').factory('gameWeeksFactory', gameWeeksFactory);

})();
