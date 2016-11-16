Ext.define('iMusic.view.AlbumInfoPanel', {
	extend : 'Ext.panel.Panel',
	requires : [
		'iMusic.model.SingleTrackModel',
		'iMusic.store.TrackGridStore',
		'iMusic.view.AlbumMediaPanel'
	],
	xtype : 'albumInfoPanel',
	title : 'Album Info',
	width : 375,
	height : 650,
	layout : 'vbox',
	store : null,
	referenceHolder : true,
	initComponent : function() {
		this.currentArtist = "";
		this.store = Ext.create('iMusic.store.TracksStore');
		this.albumMediaPanel = Ext.create('iMusic.view.AlbumMediaPanel',{
			reference : 'mediaPanel'
		});
		this.albumImage = Ext.widget('image', {
			src : 'https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg',
			height : 200,
			width : 260,
			padding : '10 0 10 80'
		});
		this.trackGrid = Ext.widget('grid', {
			title :null,
			width : 375,
			height : 575,
			columns : [
				{ text : 'Name', dataIndex : 'trackName', flex : 4},
				{ text : 'Duration', dataIndex : 'duration', flex: 2},
				{
					renderer : function(value)
					{
						return '<img src="http://suptg.thisisnotatrueending.com/archive/9411513/images/1272205620544.gif" style="width:25px;height:25px;">'
					},
					flex : 1
				}
			],
			store : 'iMusic.store.TrackGridStore',
			padding : '10 0 0 10', 
			reference : 'trackGrid'
		});
		this.items = [
			this.albumMediaPanel,
			this.trackGrid
		];
		this.callParent(arguments);
	},
	populateData : function(){
		if(this.store.getAt(0)){
			this.setTitle(this.store.getAt(0).get('albumName'));
			this.albumMediaPanel.setImage(this.store.getAt(0).images().getAt(3).get('#text'));
			this.trackGrid.getStore().loadRecords(this.store.getAt(0).tracks().getRange(0,this.store.getAt(0).tracks().getCount() ));
			console.log(this.store.getAt(0).images());
			this.currentArtist = this.store.getAt(0).get('artist');
		}
		else
			Ext.Msg.show({
			     title: 'Information Unavailable',
			     msg: 'Album information currently unavailable',
			     buttons: Ext.Msg.OK,
			     icon: Ext.Msg.ERROR
			});
	}
});