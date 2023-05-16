const User = {
    name: '',
    followers: 10,
    following: 10,
    cover: '#',
    /*--SETTERS--*/
    setName: function (text) {
        this.name = text;
        return this.name;
    },
    setFollowers: function (number) {
        this.followers = number;
        return this.followers;
    },
    setFollowing: function (number) {
        this.following = number;
        return this.following;
    },
    setCover: function (text = '#') {
        this.cover = text;
        return this.cover;
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
    saveChanges: function () {
        const rawData = localStorage.getItem('data');
        let data = {};
        if(rawData){
            data = JSON.parse(rawData);
        }
        data.user = this;
        localStorage.setItem('data', JSON.stringify(data));
        return this;
    }
};

export default User;