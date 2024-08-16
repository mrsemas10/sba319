import express from 'express';
const router = express.Router();
import Pop from '../models/popM.mjs';
import db from '../db/conn.mjs';

router.get('/seed', async (req, res) => {
    try {
        await Pop.create([
            {
                artist: 'Whitey Houston',
                song: "I Will Always Love You",
                favorite: true
            }, 
            {
                artist: 'Michael Jackson',
                song: "Remember the Time",
                favorite: false
            }, 
            {
                artist: 'Britney Spears',
                song: "Womanizer",
                favorite: true
            }   
        ])
        res.status(200).redirect('/pop')
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/', async (req, res) => {
    try {
        const popSongs = await Pop.find({});
        res.status(200).render('pop/Index', { popM: popSongs})
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/new', (req, res) => {
    res.render('pop/New');
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedPopSong = await Pop.findByIdAndDelete(req.params.id);
        console.log(deletedPopSong);
        res.status(200).redirect('/pop');
    } catch (e) {
        res.status(400).send(e);
    }
})


router.put('/:id', async (req, res) => {
        if (req.body.favorite === 'on') {
            req.body.favorite = true;
        } else {
            req.body.favorite = false;
        }

    try {
        const updatedPopSong = await Pop.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedPopSong);
        res.redirect(`/pop/${req.params.id}`);
    } catch (e) {
        res.status(400).send(e);
    }
})


router.post('/', async(req, res) => {

    if (req.body.favorite === 'on') {
        req.body.favorite = true;
    } else {
        req.body.favorite = false;
    }
    console.log(req.body);

    try {
        const createdPopSong = await Pop.create(req.body);
        res.status(200).redirect('/pop');
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get("/:id/edit", async(req, res) => {
    try {
        const foundPopSong = await Pop.findById(req.params.id);
        res.status(200).render('pop/Edit', {popM: foundPopSong});
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundPopSong = await Pop.findById(req.params.id);

        res.render('pop/Show', {popM: foundPopSong});
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router;