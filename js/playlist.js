const Playlist = {
    name: '',
    user: {},
    type: 'Public',
    cover: '#',
    liked: true,
    songs: [{}],
    creationDate: new Date(),
     /*--SETTERS--*/
    setName: function (text = '') {
        this.name = text;
        return this.name;
    },
    setUser: function (name = {}) {
        this.user = name;
        return this.user;
    },
    setType: function (setting = 'Public') {
        this.type = setting;
        return this.type;
    },
    setCover: function (text = '') {
        this.cover = text;
        return this.cover;
    },
    setLiked: function (status = true) {
        this.liked = status;
        return this.liked;
    },
    setSongs: function (elements = [{}]) {
        this.songs = elements;
        return this.songs;
    },
    setCreationDate: function (date = new Date()) {
        this.creationDate = date;
        return this.creationDate;
    },
    /*--GETTERS--*/
    getName: function () {
        return this.name;
    },
    getFollowers: function () {
        return this.followers;
    },
    getFollowing: function () {
        return this.following;
    },
    getCover: function () {
        return this.cover;
    },
    /*--METHODS--*/
    getDetails: function () {
        return ``;
    },
    topArtists: function () {
        return [];
    },
    topTracks: function () {
        return [];
    },
    getPlaylists: function () {
        return [];
    },
};

export default Playlist;