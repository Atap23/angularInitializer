'use strict';

angular.module('angularInitializer.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'view1'
  });
}])

.controller('View1Ctrl', ['$http', '$window', function($http, $window) {
  var vm = this;
  vm.call = function () {

    $http({
      method : 'GET',
      url : 'http://localhost:3000/surMano',
      responseType: 'arraybuffer',
      cache: false,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/zip'
      }
    }).then(function successCallback(response) {
      console.log(response);
      $window.open('http://localhost:3000/surMano');
    }, function errorCallback(response) {
      console.log(response);
    });
  };

}]);