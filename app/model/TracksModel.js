Ext.define('iMusic.model.TracksModel', {
	extend : 'Ext.data.Model',
	requires: [
		'iMusic.model.SingleTrackModel'
	],
	fields : [
		{
			name : 'name2',
			type : 'string',
			mapping : 'name',
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
			name : 'image',
			type : 'string'
		}
	],
	hasMany : [{
		model : 'iMusic.model.SingleTrackModel',
		name : 'tracks',
		associationKey : 'tracks.track'
	}]
});