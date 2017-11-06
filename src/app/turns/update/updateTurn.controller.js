(function () {
  'use strict';
  angular
    .module('unTurno')
    .controller('UpdateTurnController',UpdateTurnController);

  /** @ngInject */
  function UpdateTurnController(TurnsService,$mdDialog,toastr, turnID) {
    var vm = this;

    vm.updateTurn = updateTurn;
    vm.closeDialog = closeDialog;

    function updateTurn(){
      TurnsService.updateTurn(vm.turn)
        .then(function(){
          toastr.success('La turna fue actualizada con exito', 'Turna actualizada');
        })
        .catch(function(){
          toastr.error('Hubo un error al intentar actualizar la turna!', 'Error!');
        });
      $mdDialog.hide();
    }

	function loadTurn(){
		TurnsService.getTurnsByID(turnID)
			.then(function(turn){
				turn.deadline = new Date(turn.deadline);
				vm.turn = turn;
			});
    }

    function closeDialog(){
      $mdDialog.cancel();
    }

	loadTurn();
  }
})();
