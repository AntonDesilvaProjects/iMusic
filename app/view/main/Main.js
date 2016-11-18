/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iMusic.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'iMusic.view.ArtistSearchResultsGrid',
        'iMusic.model.ArtistsModel',
        'iMusic.store.ArtistsStore',
        'iMusic.view.AlbumsGrid',
        'iMusic.view.SearchPanel',
        'iMusic.view.AlbumInfoPanel',
        'iMusic.view.AlbumMediaPanel',
        'iMusic.controller.iMusicController'
    ],
    width : 1075,
    xtype: 'widget.app-main',
    controller: 'musicCtrl',
    layout : 'border',

    initComponent : function(){
        this.searchPanel = Ext.widget('searchPanel', {
             colspan : 1,
             reference : 'searchPanel',
             region : 'north'
        });
        this.albumInfoPanel = Ext.widget('albumInfoPanel', {
            colspan : 1,
            rowspan : 3,
            reference : 'albumInfoPanel',
            region : 'east',
            collapsible : true
        });
        this.albumInfoPanel.collapse();
        this.artistResultsGrid = Ext.widget('artistResultsGrid', {
            reference : 'artistResults',
        });
        this.albumsGrid = Ext.widget('albumsGrid', {
            reference : 'albumsGrid',
            //region : 'center'
        });
        this.items = [
            this.searchPanel, 
            this.albumInfoPanel,
            {
                xtype : 'panel',
                layout : 'vbox',
                region : 'center',
                items : [
                    this.artistResultsGrid, 
                    this.albumsGrid
                ]
            }
        ];
        this.callParent(arguments);
    }
});
