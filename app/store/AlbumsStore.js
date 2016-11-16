Ext.define('iMusic.store.AlbumsStore', {
	extend : 'Ext.data.Store',
	model : 'iMusic.model.AlbumsModel',
	proxy : {
		type : 'ajax',
		extraParams : {
			'api_key': '',
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