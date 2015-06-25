import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    this._super();
    SC.get('/tracks/', {limit: 1}, function(song) {
			this.set('song', song);
      this.set('id', song.id);
			console.log(song);
		}.bind(this));
  }
});
