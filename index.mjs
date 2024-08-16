import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import db from './db/conn.mjs'
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import popRoutes from './controllers/pop.mjs'
import rapRoutes from './controllers/rap.mjs'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsk', jsxViewEngine());

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/pop', popRoutes);
app.use('/rap', rapRoutes);

app.get('/', (req, res) => {
    res.send(`<div> Pop and Rap Songs <br/><a href='/pop'>Pop Songs</a><br/><a href='/rap'>Rap Songs</a><br/></div>`);
})

app.listen(PORT, () => {
    console.log('server is running');
})