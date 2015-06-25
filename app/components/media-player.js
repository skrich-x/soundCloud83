import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    this._super();
    SC.get('/tracks/gold-on-the-ceiling', {limit: 1}, function(song) {
			this.set('song', song);
      this.set('id', song.id);
      console.log(song);
		}.bind(this));
  },

  actions: {
    playSong: function(){
      SC.stream(("/tracks/"+ this.get('id')), function (sound){
        this.sound = sound;
          this.sound.play();
      }.bind(this));
    },

    pauseSong: function(){
      this.get('sound').pause();
    }
  }

});
