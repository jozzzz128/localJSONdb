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
    setCover: function (text = '#') {
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
    getUser: function () {
        return this.user;
    },
    getType: function () {
        return this.type;
    },
    getCover: function () {
        return this.cover;
    },
    getLiked: function () {
        return this.liked;
    },
    getSongs: function () {
        return this.songs;
    },
    getCreationDate: function () {
        return this.creationDate;
    },
    /*--METHODS--*/
    getDetails: function () {
        return ``;
    },
    createPlaylist: function () {
        return {};
    },
    deletePlaylist: function () {
    },
    saveChanges: function () {
        const rawData = localStorage.getItem('data');
        let data = {};
        if(rawData){
            data = JSON.parse(rawData);
        }
        data.playlist = this;
        localStorage.setItem('data', JSON.stringify(data));
        return this;
    },
};

export default Playlist;