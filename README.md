# iMusic
A music/album search applicatiom built with ExtJS 5.0.1 and LastFM API. Discover and listen to artists, albums, and tracks.  

### Searching for content
![alt text](https://raw.githubusercontent.com/AntonDesilvaProjects/iMusic/master/Image%231.JPG "Searching for albums")



### Playing a track
![alt text](https://raw.githubusercontent.com/AntonDesilvaProjects/iMusic/master/Image%232.JPG "Playing a track")


###Installation Instructions
  This is purely a client-side application so you need your own API keys to use the application. To get the keys, follow the instructions below.
  
1. Obtain Youtube API key from Google API. Follow the instructions [here](https://developers.google.com/youtube/v3/getting-started) to obtain and activate your key.
2. You will also need a LastFM API key. Obtain it [here](http://www.last.fm/api/account/create).
3. Once you have your keys, place them in the `/app/Config.js` file in the lines shown below:

  ```javascript
  Ext.define('iMusic.Config', {
    singleton : true,
    youtube_api_key : '[Place your Youtube API key here]',
    lastfm_api_key : '[Place your LastFM API key here]'
  });
  ```

4. That's it. Start the application with `sencha app watch` in the `iMusic` directory( or with any other server setup ). 
