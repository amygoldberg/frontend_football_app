(function gameWeeksFactory() {

  // create users' game weeks factory
  var gameWeeksFactory = function($http) {
    var factory = {};
    factory.user = {};
    factory.gameWeeks = [];
    factory.gameWeek = {};

    factory.getGameWeeks = function(userId) {
      // allow access to the user's list of game weeks
      return $http.get("http://localhost:3000/users/" + userId).success(function(response) {
        angular.copy(response.gameWeeks, factory.gameWeeks);
        angular.copy(response, factory.user);
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
