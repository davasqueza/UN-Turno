(function () {
  'use strict';

  angular
    .module('unTurno')
    .service('TurnsService', TurnsService);

  /** @ngInject */
  function TurnsService($resource, backend_url, $firebaseArray) {
    var service = {
      getAllTurns: getAllTurns,
      getTurnsByID: getTurnsByID,
      createTurn: createTurn,
      updateTurn: updateTurn,
      deleteTurn: deleteTurn
    };

    var TurnResource = $resource(backend_url + '/turns/:id', {}, {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    });

    var database = firebase.database().ref().child("turns");

    return service;

    function getAllTurns() {
      return $firebaseArray(database);
    }

    function getTurnsByID(ID) {
      return TurnResource.show({id: ID}).$promise;
    }

    function createTurn(turn) {
      turn = angular.copy(turn);
      turn.deadline = turn.deadline.getTime();

      return getAllTurns().$add(turn);
    }

    function updateTurn(turn) {
      return TurnResource.update(turn).$promise;
    }

    function deleteTurn(turnID) {
      return TurnResource.delete({id: turnID}).$promise;
    }

  }
})();
