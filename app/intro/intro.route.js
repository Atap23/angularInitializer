(function() {
  'use strict';

  angular.module('angularInitializer.intro')
    .config(introRoute);

  introRoute.$inject = ['$stateProvider'];

  function introRoute($stateProvider) {
    debugger;
    $stateProvider.state({
      name: 'intro',
      url: '/intro',
      templateUrl: './intro.template.html',
      controller: 'IntroController',
      controllerAs: 'intro'
    });
  }
})();