(function gameWeeksController() {

  var GameWeeksController = function($routeParams, gameWeeksFactory) {
    var vm = this;
    vm.userId = $routeParams.userId;
    vm.user = gameWeeksFactory.user;

    function init() {
      gameWeeksFactory.getGameWeeks(vm.userId);
    }

    init();
  };

  GameWeeksController.$inject = ['$routeParams', 'gameWeeksFactory'];

  angular.module('footballApp').controller('gameWeeksController', GameWeeksController);

})();
