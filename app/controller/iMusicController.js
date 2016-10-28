Ext.define('iMusic.controller.iMusicController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.musicCtrl',
	init : function()
	{
		this.artistsGrid = this.lookupReference('artistResults');
		this.searchPanel = this.lookupReference('searchPanel');
		this.searchButton = this.searchPanel.lookupReference('btnSearch');
		this.txtArtistName = this.searchPanel.lookupReference('txtArtistName');
		this.searchButton.on('click', this.onClickSearchButton, this);
		this.button = this.lookupReference('btn');
		this.button.on('click', this.buttonClick, this);
	},
	buttonClick: function() {
		/*var s = Ext.create('iMusic.store.ArtistsStore');
		s.load();
		s.on('load', function(store, records, successful){
			if(successful)
				console.log(s.getAt(0));
			else
				console.log('failed :(');
		});*/
		//console.log(s.getAt(0));
		this.artistsGrid.doLayout();
	},
	onClickSearchButton : function() {
		//this.artistsGrid.store.getProxy().url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.txtArtistName.getValue() + '&api_key=9e06552272f88d46f3feac75b2254335&format=json'
		this.artistsGrid.store.getProxy().extraParams.artist = this.txtArtistName.getValue();
		this.artistsGrid.store.load();
		this.artistsGrid.store.on('load', this.onLoadArtistsStore, this);
	},
	onLoadArtistsStore : function( store, records, eOpts) {
		this.artistsGrid.setTitle(store.getCount() + ' results found for "' + store.getProxy().extraParams.artist + '"');
	}
});