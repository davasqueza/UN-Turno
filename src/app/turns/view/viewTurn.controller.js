(function() {
	'use strict';

	angular
		.module('unTurno')
		.controller('ViewTurnController', ViewTurnController);

	/** @ngInject */
	function ViewTurnController(TurnsService, $mdDialog, turnID, $location, $filter) {
		var vm = this;

		vm.closeDialog = closeDialog;
		vm.applyTurn = applyTurn;
		vm.viewProfile = viewProfile;

		function loadTurn(){
			TurnsService.getTurnsByID(turnID)
				.then(function(turn){
					turn.deadlineText = $filter('date')(turn.deadline, "shortDate");
					vm.turn = turn;
				});
		}

		function viewProfile(){
			$location.url("/viewUser");
			$location.search("id",vm.turn.userId);
			$mdDialog.hide();
		}

		function applyTurn(){
			$mdDialog.hide();
		}

		function closeDialog(){
			$mdDialog.cancel();
		}

		loadTurn();
	}
})();
