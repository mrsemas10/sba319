import express from 'express';
const router = express.Router();
import Rap from '../models/rap.mjs';
import db from '../db/conn.mjs';

router.get('/seed', async (req, res) => {
    try {
        await Rap.create([
            {
                artist: 'Nicki Minaj',
                song: "Super Bass",
                favorite: false
            }, 
            {
                artist: 'Ludacris',
                song: "Get Back",
                favorite: false
            }, 
            {
                artist: 'Queen Latifah',
                song: "Ladies First",
                favorite: true
            }   
        ])
        res.status(200).redirect('/rap')
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/', async (req, res) => {
    try {
        const rapSongs = await Rap.find({});
        res.status(200).render('rap/Index', { rap: rapSongs})
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/new', (req, res) => {
    res.render('rap/New');
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedRapSong = await Rap.findByIdAndDelete(req.params.id);
        console.log(deletedRapSong);
        res.status(200).redirect('/rap');
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
        const updatedRapSong = await Rap.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedRapSong);
        res.redirect(`/rap/${req.params.id}`);
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
        const createdRapSong = await Rap.create(req.body);
        res.status(200).redirect('/rap');
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get("/:id/edit", async(req, res) => {
    try {
        const foundRapSong = await Rap.findById(req.params.id);
        res.status(200).render('rap/Edit', {rap: foundRapSong});
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const foundRapSong = await Rap.findById(req.params.id);

        res.render('rap/Show', {rap: foundRapSong});
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router;