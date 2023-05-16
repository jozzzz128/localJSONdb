const Artist = {
    name: '',
    monthlyListeners: 10,
    verification: true,
    banner: '#',
    followed: true,
    creationDate: new Date(),
    /*--SETTERS--*/
    setName: function (text = '') {
        this.name = text;
        return this.name;
    },
    setMonthlyListeners: function (number) {
        this.monthlyListeners = number;
        return this.monthlyListeners;
    },
    setVerification: function (status = 'true') {
        this.verification = status;
        return this.verification;
    },
    setBanner: function (text = '#') {
        this.banner = text;
        return this.banner;
    },
    setFollowed: function (status = 'true') {
        this.banner = status;
        return this.banner;
    },
    setCreationDate: function (date = new Date()) {
        this.creationDate = date;
        return this.creationDate;
    },
    /*--GETTERS--*/
    getName: function () {
        return this.name;
    },
    getMonthlyListeners: function () {
        return this.monthlyListeners;
    },
    getVerification: function () {
        return this.verification;
    },
    getBanner: function () {
        return this.banner;
    },
    getFollowed: function () {
        return this.banner;
    },
    getCreationDate: function () {
        return this.creationDate;
    },
    /*--METHODS--*/
    getDetails: function () {
        return ``;
    },
    followArtist: function () {
    },
    unfollowArtist: function () {
    },
    getDiscography: function () {
    },
    getLikedSongs: function () {
    },
    getArtistPick: function () {
    },
    saveChanges: function () {
        const rawData = localStorage.getItem('data');
        let data = {};
        if(rawData){
            data = JSON.parse(rawData);
        }
        data.artist = this;
        localStorage.setItem('data', JSON.stringify(data));
        return this;
    }
};

export default Artist;