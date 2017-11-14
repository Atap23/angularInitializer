'use strict';

describe('angularInitializer.version module', function() {
  beforeEach(module('angularInitializer.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
