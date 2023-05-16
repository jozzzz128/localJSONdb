const db = {
    data: {},
    create: function (key, value) {
        this.data[key] = value;
    },
    save: function () {
        localStorage.setItem('data', JSON.stringify(this.data));
    },
    update: function () {
        const rawData = localStorage.getItem('data');
        const data = JSON.parse(rawData);
        return data;
    }
};

export default db;

//db.save();
//db.update();
//db.