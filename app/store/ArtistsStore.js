Ext.define('iMusic.store.ArtistsStore', {
	extend : 'Ext.data.Store',
	model : 'iMusic.model.ArtistsModel',
	alias : 'store.artistsStore',
	//autoLoad : true,
	proxy : {
		type : 'ajax',
		method : 'GET',
		extraParams : {
			'api_key': '',
			'format' : 'json',
			'method' : 'artist.search',
			'artist' : null
		},
		url : 'http://ws.audioscrobbler.com/2.0',
		reader : {
			type : 'json',
			rootProperty : 'results.artistmatches.artist'
		}
	}
})