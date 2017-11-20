(function() {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('angularInitializer', [
    'ui.router',
    'angularInitializer.intro'
  ]).
  config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/intro');
  }]);
})();