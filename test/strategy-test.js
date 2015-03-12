var vows = require('vows');
var assert = require('assert');
var util = require('util');
var StashStrategy = require('passport-stash/strategy');


vows.describe('StashStrategy').addBatch({

  'strategy': {
    topic: function() {
      return new StashStrategy({
        consumerKey: 'ABC123',
          consumerSecret: 'secret',
          requestTokenURL: 'http://example.com/request',
          accessTokenURL: 'http://example.com/access',
          userAuthorizationURL: 'http://example.com/authorize'
      },
      function() {});
    },

    'should be named stash': function (strategy) {
      assert.equal(strategy.name, 'stash');
    }
  }

}).export(module);
