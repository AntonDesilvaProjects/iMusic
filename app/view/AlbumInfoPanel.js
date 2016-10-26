Ext.define('iMusic.view.AlbumInfoPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'albumInfoPanel',
	title : 'Coldplay - Parachutes',
	width : 450,
	height : 650,
	layout : 'vbox',
	initComponent : function() {

		this.albumImage = Ext.widget('image', {
			src : 'https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg',
			height : 200,
			width : 200,
			padding : '10 0 10 30'
		});
		this.items = [this.albumImage];
		this.callParent(arguments);
	}
});