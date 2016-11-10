Ext.define('iMusic.store.YoutubeSearchStore', {
	extend : 'Ext.data.Store',
	model : 'iMusic.model.YoutubeResultsModel',
	proxy : {
		type : 'ajax',
		url : 'https://www.googleapis.com/youtube/v3/search',
		extraParams : {
			'part' : 'id',
			'type' : 'video',
			'key' : '',
			'maxResults' : 1,
			'q' : null
		},
		reader : {
			type : 'json',
			rootProperty : 'items'
		}
	}
});