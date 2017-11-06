(function() {
  'use strict';

  angular
    .module('unTurno')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $route) {
	$route.reload();
    $log.debug('runBlock end');
  }

})();
