Ext.define('iMusic.model.TracksModel', {
	extend : 'Ext.data.Model',
	requires: [
		'iMusic.model.SingleTrackModel',
		'iMusic.model.AlbumImagesModel'
	],
	fields : [
		{
			name : 'albumName',
			type : 'string',
			mapping : 'name'
		},
		{
			name : 'mbid',
			type : 'string',
		},
		{
			name : 'listeners',
			type : 'string'
		},
		{
			name : 'playcount',
			type : 'string'
		},
		{
			name : 'artist',
			type : 'string'
		}
	],
	hasMany : [
		{
			model : 'iMusic.model.SingleTrackModel',
			name : 'tracks',
			associationKey : 'tracks.track'
		},
		{
			model : 'iMusic.model.AlbumImagesModel',
			name : 'images',
			associationKey : 'image'
		}
	]
});