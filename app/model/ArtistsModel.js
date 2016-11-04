Ext.define('iMusic.model.ArtistsModel', {
	extend : 'Ext.data.Model',
	requires : [
		'iMusic.model.ArtistImageModel'
	],
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
			name : 'artistImage',
			type : 'string'
		},
		{
			name : 'mbid',
			type : 'string'
		}
	],
	hasMany : [
		{
			model : 'iMusic.model.ArtistImageModel',
			name : 'images',
			associationKey : 'image'
		}
	]
});