import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    this._super();
    SC.get('/tracks/gold-on-the-ceiling', {limit: 20}, function(song) {
			this.set('song', song);
      this.set('id', song.id);
		}.bind(this));
  }
});
