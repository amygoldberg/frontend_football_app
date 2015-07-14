(function usersController() {

  // inject the usersFactory into this controller
  var UsersController = function(usersFactory, $location) {
    this.sortBy = "name";
    this.reverse = false;

    // set the controllers array of users equal to the factories
    this.users = usersFactory.users;
    this.user = usersFactory.user;

    var vm = this;
    vm.location = $location;

    // set the users array in the scope from the usersFactory
    function init() {
      usersFactory.getUsers();
    }

    // initialize the controller
    init();

    this.doSort = function(name) {
      this.sortBy = name;
      this.reverse = !this.reverse;
    };

    this.showUser = function(userId) {
      console.log("ID is " + userId);
      this.location.path("/users/" + userId);
    }
  };

  // prevent the minifier from breaking dependency injection
  UsersController.$inject = ['usersFactory', '$location'];

  // the controller is part of the module
  angular.module('footballApp').controller('usersController', UsersController);

})();
