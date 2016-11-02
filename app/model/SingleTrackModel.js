Ext.define('iMusic.model.SingleTrackModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'trackName',
			type : 'string',
			mapping : 'name'
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