Ext.define('iMusic.view.AlbumMediaPanel', {
	extend : 'Ext.panel.Panel',
	layout : 'card',
	xtype : 'albumMedia',
	width : 450,
	height : 220,

	initComponent: function() {
		this.albumImage =  Ext.widget('image', {
			src : 'https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg',
			height : 220,
			width : 280,
			padding : '10 0 10 80'
		});

		this.mediaPlayer = Ext.widget( 'panel', {
			//html : '<iframe width="420" height="315" src="https://www.youtube.com/embed/XGSy3_Czz8k"></iframe>',
			html : 'Please select a track to play...',
			padding : '10 0 10 0'
		});
		/*this.lblNowPlaying = Ext.widget('label', {
			text : 'Bruno Mars - Grenade',
			align : 'center'
		});*/


		this.items = [

			{
				items : this.albumImage
			},
			this.mediaPlayer
		];

		this.callParent(arguments);

	},
	getAlbumImage : function()
	{
		return this.albumImage;
	},
	setImage : function(imgSrc)
	{
		this.albumImage.setSrc(imgSrc);
	}

});