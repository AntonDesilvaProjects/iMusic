Ext.define('iMusic.view.AlbumsGrid', {
	extend : 'Ext.grid.Panel',
	xtype : 'albumsGrid',
	title : '5 Albums found from "The All American Eagles"',
	store : 'iMusic.store.AlbumsStore',
	width : 700,
	height : 300,
	columns : [
		{ text : 'Image', dataIndex : 'image', flex : 2 },
		{ text : 'Name', dataIndex : 'name', flex : 2.5},
		{ text : 'Last FM URL', dataIndex : 'lastfmUrl', flex : 4},
		{ text : 'Play Count', dataIndex : 'playcount', flex : 4},
	]
});