Ext.define('iMusic.store.AlbumsStore', {
	extend : 'Ext.data.Store',
	requires: [
		'iMusic.Config'
	],
	model : 'iMusic.model.AlbumsModel',
	proxy : {
		type : 'ajax',
		extraParams : {
			'api_key': '',//'9e06552272f88d46f3feac75b2254335',
			'format' : 'json',
			'method' : 'artist.gettopalbums',
			'mbid' : null
		},
		url : 'http://ws.audioscrobbler.com/2.0',
		reader : {
			type : 'json',
			rootProperty : 'topalbums.album'
		}

	}
});