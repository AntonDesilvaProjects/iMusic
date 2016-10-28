/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('iMusic.Application', {
    extend: 'Ext.app.Application',
    
    name: 'iMusic',

    stores: [
        // TODO: add global / shared stores here
        'iMusic.store.ArtistsStore',
        'iMusic.store.AlbumsStore'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
