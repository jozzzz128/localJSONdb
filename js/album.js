const Album = {
    name: '',
    artist: {},
    type: 'Single',
    cover: '#',
    liked: true,
    creationDate: new Date(),
    /*--SETTERS--*/
    setName: function (text = '') {
        this.name = text;
        return this.name;
    },
    setArtist: function (name = {}) {
        this.user = name;
        return this.user;
    },
    setType: function (setting = 'Single') {
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
    setCreationDate: function (date = new Date()) {
        this.creationDate = date;
        return this.creationDate;
    },
    /*--GETTERS--*/
    getName: function () {
        return this.name;
    },
    getArtist: function () {
        return this.artist;
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
    likeAlbum: function () {},
    dislikeAlbum: function () {
    },
    goToArtist: function () {
    },
    saveChanges: function () {
        const rawData = localStorage.getItem('data');
        let data = {};
        if(rawData){
            data = JSON.parse(rawData);
        }
        data.album = this;
        localStorage.setItem('data', JSON.stringify(data));
        return this;
    },
};

export default Album;