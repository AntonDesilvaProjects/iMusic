Ext.define('iMusic.store.TracksStore', {
	extend : 'Ext.data.Store',
	model : 'iMusic.model.TracksModel',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		method : 'GET',
		extraParams : {
			'api_key': '9e06552272f88d46f3feac75b2254335',
			'format' : 'json',
			'method' : 'album.getinfo',
			'mbid' : null
		},
		url : 'http://ws.audioscrobbler.com/2.0',//?method=artist.search&artist=cher&api_key=9e06552272f88d46f3feac75b2254335&format=json',
		reader : {
			type : 'json',
			rootProperty : 'album'
		}
	}
});