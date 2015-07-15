(function gameWeeksController() {

  var GameWeeksController = function($routeParams, gameWeeksFactory) {
    var vm = this;
    vm.userId = $routeParams.userId;
    vm.user = gameWeeksFactory.user;
    vm.gameWeeks = [];

    function init() {
      gameWeeksFactory.getGameWeeks()
        .success(function(response) {
          response.forEach(function(gameWeek) {
            vm.gameWeeks.push(gameWeek);
          })
        });
    }

    init();
  };

  GameWeeksController.$inject = ['$routeParams', 'gameWeeksFactory'];

  angular.module('footballApp').controller('gameWeeksController', GameWeeksController);

})();
