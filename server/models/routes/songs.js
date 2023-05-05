const express = require('express');
const router = express.Router();
const Song = require('../song');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).send(song);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;
  const newSong = new Song({
    title,
    artist,
    album
  });
  newSong.save()
    .then(() => res.json('Song added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Song.findById(req.params.id)
    .then(song => res.json(song))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/:id', async (req, res) => {
  try {
    const { title, artist, album, year } = req.body;
    const result = await Song.updateOne({ _id: req.params.id }, { title, artist, album, year });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});



router.route('/delete/:title').delete((req, res) => {
  Song.findOneAndDelete({ title: req.params.title })
    .then(song => {
      if (!song) {
        return res.status(404).send();
      }
      res.send(song);
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;

