Ext.define('iMusic.controller.iMusicController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.musicCtrl',
	requires: [
		'iMusic.Config'
	],
	init : function()
	{
		this.artistsGrid = this.lookupReference('artistResults');
		this.albumsGrid = this.lookupReference('albumsGrid');
		this.searchPanel = this.lookupReference('searchPanel');
		this.searchButton = this.searchPanel.lookupReference('btnSearch');
		this.txtArtistName = this.searchPanel.lookupReference('txtArtistName');
		this.albumInfoPanel = this.lookupReference('albumInfoPanel');
		this.trackGrid = this.albumInfoPanel.lookupReference('trackGrid');
		this.mediaPanel = this.albumInfoPanel.lookupReference('mediaPanel');
		this.mediaPanelBackBtn = this.albumInfoPanel.lookupReference('mediaPanelControl').lookupReference('backBtn');
		this.mediaPanelFwdBtn = this.albumInfoPanel.lookupReference('mediaPanelControl').lookupReference('fwdBtn');

		this.txtArtistName.on('specialkey', this.onEnterPressed, this);
		this.searchButton.on('click', this.onClickSearchButton, this);
		this.artistsGrid.on('select', this.onSelectArtist, this);
		this.albumsGrid.on('select', this.onSelectAlbum, this);
		this.trackGrid.on('select', this.onSelectTrack, this);
		this.mediaPanelBackBtn.on('click', this.onClickBackBtn, this);
		this.mediaPanelFwdBtn.on('click', this.onClickFwdBtn, this);

	},
	onEnterPressed : function( f , e) {
		if(e.getKey() == e.ENTER)
        	this.searchButton.fireEvent('click'); 
	},
	onClickBackBtn : function() {
		this.mediaPanelBackBtn.hide();
		this.mediaPanelFwdBtn.show();
		this.mediaPanel.getLayout().setActiveItem(0);
	},
	onClickFwdBtn : function() {
		this.mediaPanelFwdBtn.hide();
		this.mediaPanelBackBtn.show();
		this.mediaPanel.getLayout().setActiveItem(1);
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
		//this.artistsGrid.doLayout();
		
	},
	onSelectTrack : function( grid, record, index, eOpts)
	{
		console.log(record.get('artist'));
		var songResults = Ext.create('iMusic.store.YoutubeSearchStore');
		songResults.getProxy().extraParams.key = iMusic.Config.youtube_api_key;
		songResults.getProxy().extraParams.q = this.albumInfoPanel.currentArtist + ' ' + record.get('trackName');
		console.log('Query: ' + songResults.getProxy().extraParams.q );
		songResults.load();
		songResults.on('load', this.onSongResultsLoad, this);
	},
	onSongResultsLoad : function(store, records, eOpts) {
		this.mediaPanel.mediaPlayer.update('<iframe width="380" height="200" src="https://www.youtube.com/embed/' + store.getAt(0).get('videoId') + '?autoplay=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"></iframe>');
		//this.mediaPanel.getLayout().setActiveItem(1);
		this.mediaPanelFwdBtn.fireEvent('click');
	},
	onSelectAlbum : function(grid, record, index, eOpts){
		//alert('clicked');
		this.albumInfoPanel.store.getProxy().extraParams.api_key = iMusic.Config.lastfm_api_key;
		this.albumInfoPanel.store.getProxy().extraParams.mbid = record.get('mbid');
		this.albumInfoPanel.store.load();
		this.albumInfoPanel.store.on('load', this.onLoadTracksStore, this);

	},
	onLoadTracksStore : function( store, records, eOpts)
	{
		this.albumInfoPanel.populateData();
		this.mediaPanelBackBtn.fireEvent('click');
		this.albumInfoPanel.expand();
	},
	onClickSearchButton : function() {
		//this.artistsGrid.store.getProxy().url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.txtArtistName.getValue() + '&api_key=9e06552272f88d46f3feac75b2254335&format=json'
		var query = this.txtArtistName.getValue();
		if(query)
		{
			this.albumsGrid.store.removeAll();
			this.artistsGrid.store.getProxy().extraParams.api_key = iMusic.Config.lastfm_api_key;
			this.artistsGrid.store.getProxy().extraParams.artist = this.txtArtistName.getValue();
			this.artistsGrid.store.load();
			this.artistsGrid.store.on('load', this.onLoadArtistsStore, this);
		}
		else
		{
			//Do nothing
		}
	},
	onLoadArtistsStore : function( store, records, eOpts) {
		this.artistsGrid.setTitle(store.getCount() + ' results found for "' + store.getProxy().extraParams.artist + '"');
		store.each( function( current ) {
			current.set('artistImage', current.images().getAt(1).get('#text'));
		});
	},
	onSelectArtist : function ( grid, record, index, eOpts)
	{
		var mbid = record.get('mbid');
		this.albumsGrid.store.getProxy().extraParams.api_key = iMusic.Config.lastfm_api_key;
		this.albumsGrid.store.getProxy().extraParams.mbid = mbid;
		this.albumsGrid.store.load();
		this.albumsGrid.store.on('load', this.onLoadAlbumsStore, this);
	},
	onLoadAlbumsStore : function( store , record, eOpts)
	{
		this.albumsGrid.setTitle( 'Top ' +  store.getCount() + ' Albums by this Artist');
		store.each( function( current ) {
			current.set('albumImage', current.images().getAt(1).get('#text'));
		});
	}
});