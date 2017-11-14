'use strict';

angular.module('angularInitializer.version', [
  'angularInitializer.version.interpolate-filter',
  'angularInitializer.version.version-directive'
])

.value('version', '0.1');
