async function users() {
    // db option
 return [
    {
        name: "John Doe",
        place: "America",
        age: 24
    }, {
        name: "Jane Doe",
        place: "Austrailia",
        age: 22
    }
 ]
}

async function places() {
    // db option
 return [
    {
        name: "John Doe",
        lat: 23,
        lng: 234
    }, {
        name: "Jane Doe",
        lat: 23,
        lng: 234234
    }
 ]
}

module.exports = {
    users,
    places
}
