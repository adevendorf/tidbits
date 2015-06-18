/**
 *  Simple RequireJS Event Pub/Sub on the Window object
 *  Example Defined as 'eventer'
 *
 *  Code Sample:
 *  
 *  eventer.sub('EVENT_NAME', this.someFunction);
 *  
 *  eventer.pub('EVENT_NAME', {
 *    name: 'joe'
 *  });
 */
define(['jquery'], function($) {
  return {
    pub: function(name, data) {
      $(window).trigger(name, data);
    },    
    sub: function(name, callback) {
      $(window).on(name, function(event, data) {
        callback(data);
      });
    }
  };
});