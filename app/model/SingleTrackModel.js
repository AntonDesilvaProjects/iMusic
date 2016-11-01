Ext.define('iMusic.model.SingleTrackModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'name',
			type : 'string',
			//mapping : 'tracks.track'
		},
		{
			name : 'url',
			type : 'string',
			//mapping : 'tracks.track'
		},
		{
			name : 'duration',
			type : 'string',
			//mapping : 'tracks.track'
		}
	]
});