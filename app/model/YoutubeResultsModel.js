//https://www.googleapis.com/youtube/v3/search?part=id&q=java&type=video&key=AIzaSyCpQVParndqipXMNLol3FwE2KQ7soKRTNE&type=video&maxResults=50
Ext.define('iMusic.model.YoutubeResultsModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'videoId',
			type : 'string',
			mapping : 'id.videoId'
		}
	]
});