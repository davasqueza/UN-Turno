(function () {
  'use strict';

  angular
    .module('unTurno')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
    .when('/turn', {
      templateUrl: 'app/turns/turn.html',
      controller: 'TurnsController',
      controllerAs: 'vm'
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
	.when('/logout', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
	.when('/viewUser', {
      templateUrl: 'app/user/view/viewUser.html',
      controller: 'ViewUserController',
      controllerAs: 'vm'
    })
	.when('/register', {
		templateUrl: 'app/user/register/registerUser.html',
		controller: 'RegisterUserController',
		controllerAs: 'vm'
	})
    .otherwise({
        redirectTo: '/home'
    });
  }

})();
