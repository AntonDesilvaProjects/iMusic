Ext.define('iMusic.model.ArtistsModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'name',
			type : 'string'
		},
		{
			name : 'listeners',
			type : 'string'
		},
		{
			name : 'lastfmUrl',
			type : 'string',
			mapping : 'url'
		},
		{
			name : 'image',
			type : 'string'
		}
	]
});