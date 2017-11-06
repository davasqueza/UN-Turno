(function() {
	'use strict';

	angular
		.module('unTurno')
		.controller('CreateTurnController', CreateTurnController);

	/** @ngInject */
	function CreateTurnController(TurnsService, $mdDialog, toastr) {
		var vm = this;

		vm.turn = {state: "activo", solved: false};
		vm.createTurn = createTurn;
		vm.closeDialog = closeDialog;

		function createTurn(){
			TurnsService.createTurn(vm.turn)
				.then(function(){
					toastr.success('La turna fue creada con exito', 'Turna creada');
				})
				.catch(function(){
					toastr.error('Hubo un error al intentar crear la turna!', 'Error!');
				});
			$mdDialog.hide();
		}

		function closeDialog(){
			$mdDialog.cancel();
		}
	}
})();
