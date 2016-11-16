Ext.define('iMusic.view.AlbumsGrid', {
	extend : 'Ext.grid.Panel',
	xtype : 'albumsGrid',
	title : 'Albums',//'5 Albums found from "The All American Eagles"',
	store : 'iMusic.store.AlbumsStore',
	width : '100%',//700,
	height : 425,
	columns : [
		{ 
			text : 'Image', 
			dataIndex : 'albumImage', 
			renderer : function(value)
			{
				return '<img src="' + value + '" />';
			},
			flex : 2
		 },
		{ text : 'Name', dataIndex : 'name', flex : 2.5},
		{ text : 'Last FM URL', dataIndex : 'lastfmUrl', flex : 4},
		{ text : 'Play Count', dataIndex : 'playcount', flex : 4},
	]
});