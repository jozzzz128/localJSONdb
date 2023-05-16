const Song = {
    name: '',
    album: {},
    plays: 0,
    duration: 0,
    liked: true,
    media: '#',
    creationDate: new Date(),
    /*--SETTERS--*/
    setName: function (text = '') {
        this.name = text;
        return this.name;
    },
    setAlbum: function (album = {}) {
        this.album = album;
        return this.album;
    },
    setPlays: function (plays = 0) {
        this.plays = plays
        return this.plays;
    },
    setDuration: function (duration = 0) {
        this.duration = duration;
        return this.duration;
    },
    setLiked: function (liked = true) {
        this.liked = liked;
        return this.liked;
    },
    setMedia: function (media = '#') {
        this.media = media;
        return this.media;
    },
    setCreationDate: function (date = new Date()) {
        this.date = date;
        return this.date;
    },
    /*--GETTERS--*/
    getName: function () {
        return this.name;
    },
    getAlbum: function () {
        return this.album;
    },
    getPlays: function () {
        return this.plays;
    },
    getDuration: function () {
        return this.duration;
    },
    getLiked: function () {
        return this.liked;
    },
    getMedia: function () {
        return this.media;
    },
    getCreationDate: function () {
        return this.creationDate;
    },
    /*--METHODS--*/
    playSong: function () {
        
    },
    pauseSong: function () {

    },
    likeSong: function () {

    },
    dislikeSong: function () {

    },
    addToPlaylist: function () {
        return {};
    },
    removeFromPlaylist: function () {
        return {};
    },
    goToArtist: function () {
        
    },
    goToAlbum: function () {
        
    },
    saveChanges: function () {
        const rawData = localStorage.getItem('data');
        let data = {};
        if(rawData){
            data = JSON.parse(rawData);
        }
        data.song = this;
        localStorage.setItem('data', JSON.stringify(data));
        return this;
    }
};

export default Song;