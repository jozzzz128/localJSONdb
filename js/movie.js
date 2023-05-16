import db from './js/db.js';

const movie = {
    name: 'Whiplash',
    genre: 'Drama',
    duration: 10,
    description: function () {
        return `The movie you are watching is ${this.name}, and its duration is ${this.duration} hours.`;
    },
    tellMeGenre: function () {
        return `${this.name} is a ${this.genre} movie (:`;
    },
    /*--SETTERS--*/
    setName: function (text) {
        this.name = text;
        return this.name;
    },
    /*--GETTERS--*/
    getName: function () {
        return this.name;
    }
};

export default movie;