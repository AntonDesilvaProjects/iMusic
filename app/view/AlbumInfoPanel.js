Ext.define('iMusic.view.AlbumInfoPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'albumInfoPanel',
	title : 'Coldplay - Parachutes',
	width : 450,
	height : 650,
	layout : 'vbox',
	store : null,
	referenceHolder : true,
	initComponent : function() {

		this.store = Ext.create('iMusic.store.TracksStore');
		this.albumImage = Ext.widget('image', {
			src : 'https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg',
			height : 200,
			width : 220,
			padding : '10 0 10 30'
		});
		this.items = [
			this.albumImage
		];
		this.callParent(arguments);
	},
	populateData : function(){
		this.setTitle(this.store.getAt(0).get('albumName'));
		this.albumImage.setSrc(this.store.getAt(0).images().getAt(3).get('#text')); 
		console.log(this.store.getAt(0).images());
	}
});