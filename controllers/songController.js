const Song = require('../models/song');

const get_all_songs = (request, response) => {
    console.log('get all songs');

    Song.find()
        .then(result => {
            console.log(result);
            response.json(result)
        })
        .catch(err => {
            console.log(err);
        })
}

const post_new_song = (request, response) => {
    console.log(('post new song'));

    const newSong = new Song(request.body)

    newSong.save()
    .then(() => {
        response.status(201).send('Song Added')
    })
    .catch(err => {
        console.log(err)
        response.status(304).send('Song Not Added')
    })
}

const delete_song = (request, response) => {
    
    const id = request.params.id;
    console.log('Delete Song', id)

    Song.findByIdAndDelete(id)
        .then(result => {
            response.status(204).send('Song Deleted')
        })
        .catch(err => {
            response.status(304).send('Song Not Deleted')
            console.log(err)
        })
}

const update_song = (request, response) => {

    const id = request.params.id;
    console.log('Update Song: ', id);

    const updatedSong = request.body;

    Song.findByIdAndUpdate(id, updatedSong)
        .then(result => {
            console.log(result)
            response.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
            response.status(304).send('Song Not Updated')
        })
}

module.exports = {
    get_all_songs,
    post_new_song,
    delete_song,
    update_song
}