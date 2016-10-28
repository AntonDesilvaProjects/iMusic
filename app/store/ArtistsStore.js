Ext.define('iMusic.store.ArtistsStore', {
	extend : 'Ext.data.Store',
	model : 'iMusic.model.ArtistsModel',
	alias : 'store.artistsStore',
	//autoLoad : true,
	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=9e06552272f88d46f3feac75b2254335&format=json',
		reader : {
			type : 'json',
			rootProperty : 'results.artistmatches.artist'
		}
	}
})