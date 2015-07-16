(function gameWeeksController() {

  var GameWeeksController = function($routeParams, gameWeeksFactory) {
    var vm = this;
    vm.userId = $routeParams.userId;
    vm.user = gameWeeksFactory.user;
    vm.gameWeeks = gameWeeksFactory.gameWeeks;
    this.newGameWeekForm = {};
    this.newGameWeekForm.game = {};
    this.newGameWeekForm.points = "";
    this.newGames = [];

    this.createNewGame = function() {
      this.newGames.push(this.newGameWeekForm.game);
    }

    this.createGameWeek = function() {
      gameWeeksFactory.createGameWeek(this.newGames);
    }

    this.newGameWeekForm.teams = [{
      name: "arizona cardinals"
    }, {
      name: "atlanta falcons"
    }, {
      name: "baltimore ravens"
    }, {
      name: "buffalo bills"
    }, {
      name: "carolina panthers"
    }, {
      name: "chicago bears"
    }, {
      name: "cincinnati bengals"
    }, {
      name: "cleveland browns"
    }, {
      name: "dallas cowboys"
    }, {
      name: "denver broncos"
    }, {
      name: "detroit lions"
    }, {
      name: "green bay packers"
    }, {
      name: "houston texans"
    }, {
      name: "indianapolis colts"
    }, {
      name: "jacksonville jaguars"
    }, {
      name: "kansas city chiefs"
    }, {
      name: "miami dolphins"
    }, {
      name: "minnesota vikings"
    }, {
      name: "new england patriots"
    }, {
      name: "new orleans saints"
    }, {
      name: "new york giants"
    }, {
      name: "new york jets"
    }, {
      name: "oakland raiders"
    }, {
      name: "philadelphia eagles"
    }, {
      name: "pittsburgh steelers"
    }, {
      name: "san diego chargers"
    }, {
      name: "san fran 49ers"
    }, {
      name: "seattle seahawks"
    }, {
      name: "st. louis rams"
    }, {
      name: "tampa bay buccaneers"
    }, {
      name: "tennessee titans"
    }, {
      name: "washington redskins"
    }];

    this.newGameWeekForm.spreads = [{
      points: "-1"
    }, {
      points: "-1.5"
    }, {
      points: "-2"
    }, {
      points: "-2.5"
    }, {
      points: "-3"
    }, {
      points: "-3.5"
    }, {
      points: "-4"
    }, {
      points: "-4.5"
    }, {
      points: "-5"
    }, {
      points: "-5.5"
    }, {
      points: "-6"
    }, {
      points: "-6.5"
    }, {
      points: "-7"
    }, {
      points: "-7.5"
    }, {
      points: "-8"
    }, {
      points: "-8.5"
    }, {
      points: "-9"
    }, {
      points: "-9.5"
    }, {
      points: "-10"
    }, {
      points: "-10.5"
    }];

    function init() {
      gameWeeksFactory.getGameWeeks();
    }

    init();
  };

  GameWeeksController.$inject = ['$routeParams', 'gameWeeksFactory'];

  angular.module('footballApp').controller('gameWeeksController', GameWeeksController);

})();
