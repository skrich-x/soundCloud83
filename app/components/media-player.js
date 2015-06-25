import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    SC.get('/tracks/', {limit: 20}, function(song) {
			this.set('song', song);
			console.log(song);
		}.bind(this));
  }
});
