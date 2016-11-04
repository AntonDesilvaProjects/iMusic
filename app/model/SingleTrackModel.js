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
			convert : function(value)
			{
				var mins = Math.floor(value / 60);
				var seconds = value % 60;
				if( seconds % 10 == seconds)
					seconds = '0' + seconds;
				return mins + ':' + seconds
			}
			//mapping : 'tracks.track'
		}
	]
});