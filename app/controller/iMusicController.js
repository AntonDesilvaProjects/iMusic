Ext.define('iMusic.controller.iMusicController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.musicCtrl',
	init : function()
	{
		this.artistsGrid = this.lookupReference('artistResults');
		this.albumsGrid = this.lookupReference('albumsGrid');
		this.searchPanel = this.lookupReference('searchPanel');
		this.searchButton = this.searchPanel.lookupReference('btnSearch');
		this.txtArtistName = this.searchPanel.lookupReference('txtArtistName');
		this.albumInfoPanel = this.lookupReference('albumInfoPanel');


		this.searchButton.on('click', this.onClickSearchButton, this);
		this.artistsGrid.on('select', this.onSelectArtist, this);
		this.albumsGrid.on('select', this.onSelectAlbum, this);


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
		var s = Ext.create('iMusic.store.TracksStore');
		s.getProxy().extraParams.mbid = '8281dcab-b75d-4cde-b275-1c07862690f2';
		s.load();
		s.on('load', function(store, records){
			console.log(store.getAt(0).tracks().getAt(1).get('name'));//.get('tracks').track[0]);
		});
	},
	onSelectAlbum : function(grid, record, index, eOpts){
		//alert('clicked');
		this.albumInfoPanel.store.getProxy().extraParams.mbid = record.get('mbid');
		this.albumInfoPanel.store.load();
		this.albumInfoPanel.store.on('load', this.onLoadTracksStore, this);

	},
	onLoadTracksStore : function( store, records, eOpts)
	{
		this.albumInfoPanel.populateData();
	},
	onClickSearchButton : function() {
		//this.artistsGrid.store.getProxy().url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.txtArtistName.getValue() + '&api_key=9e06552272f88d46f3feac75b2254335&format=json'
		this.artistsGrid.store.getProxy().extraParams.artist = this.txtArtistName.getValue();
		this.artistsGrid.store.load();
		this.artistsGrid.store.on('load', this.onLoadArtistsStore, this);
	},
	onLoadArtistsStore : function( store, records, eOpts) {
		this.artistsGrid.setTitle(store.getCount() + ' results found for "' + store.getProxy().extraParams.artist + '"');
	},
	onSelectArtist : function ( grid, record, index, eOpts)
	{
		var mbid = record.get('mbid');
		this.albumsGrid.store.getProxy().extraParams.mbid = mbid;
		this.albumsGrid.store.load();
		this.albumsGrid.store.on('load', this.onLoadAlbumsStore, this);
	},
	onLoadAlbumsStore : function( store , record, eOpts)
	{
		this.albumsGrid.setTitle( 'Top ' +  store.getCount() + ' Albums by this Artist');
	}
});