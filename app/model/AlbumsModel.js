Ext.define('iMusic.model.AlbumsModel', {
	extend : 'Ext.data.Model',
	requires : [
		'iMusic.model.AlbumImagesModel'
	],
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
			name : 'albumImage',
			type : 'string',
			convert : function(input, model){
				//return model.images().getAt(1).get('#text');
				return "";
			}
		}
	],
	hasMany : [
		{
			model : 'iMusic.model.AlbumImagesModel',
			name : 'images',
			associationKey : 'image'
		}
	]
});