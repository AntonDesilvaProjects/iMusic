Ext.define('iMusic.model.AlbumsModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'name',
			type : 'string'
		},
		{
			name : 'playcount',
			type : 'string'
		},
		{
			name : 'mbid',
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