(function() {
	'use strict';

	angular
		.module('unTurno')
		.controller('TurnsController', TurnsController);

	/** @ngInject */
	function TurnsController(TurnsService, $mdDialog, $location, $scope) {
		var vm = this;

		vm.openCreateDialog = openCreateDialog;
		vm.openViewDialog = openViewDialog;
		vm.search = {};

		function loadTurns(){
      vm.turns = TurnsService.getAllTurns();
		}

		function openCreateDialog($event){
			$mdDialog.show({
				controller: 'CreateTurnController',
				controllerAs: 'vm',
				templateUrl: 'app/turns/create/createTurn.html',
				targetEvent: $event,
				clickOutsideToClose:true
			})
			.finally(function() {
				loadTurns();
			});
		}

		function loadFilters(){
			if($location.search().search){
				vm.search.title = $location.search().search;
				$scope.accordion.toggle(0);
			}
		}

		function openViewDialog($event, turnID){
			$mdDialog.show({
				controller: 'ViewTurnController',
				controllerAs: 'vm',
				templateUrl: 'app/turns/view/viewTurn.html',
				targetEvent: $event,
				clickOutsideToClose:true,
				locals: {
					turnID: turnID
				}
			})
			.finally(function() {
				loadTurns();
			});
		}

		loadTurns();
    loadFilters();
	}
})();
