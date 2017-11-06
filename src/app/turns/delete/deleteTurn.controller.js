(function() {
  'use strict';

  angular
    .module('unTurno')
    .controller('DeleteTurnController', DeleteTurnController);

  /** @ngInject */
  function DeleteTurnController(TurnsService,$mdDialog,toastr,turnID) {
    var vm = this;

    vm.deleteTurn = deleteTurn;
    vm.closeDialog = closeDialog;

    function deleteTurn() {
      TurnsService.deleteTurn(turnID)
        .then(function () {
          toastr.success('La turna fue eliminada con exito', 'Turna creada');
        })
        .catch(function () {
          toastr.error('Hubo un error al intentar eliminar la turna!', 'Error!');
        });
      $mdDialog.hide();
    }

    function closeDialog() {
      $mdDialog.cancel();
    }
  }
})();
