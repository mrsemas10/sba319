import mongoose from 'mongoose';

const popSchema = new mongoose.Schema({
   artist: {
    type: String,
    required: true
},
   song: {
    type: String,
    required: true
   },
   favorite: Boolean 
});

const Pop = mongoose.model('Pop', popSchema);

export default Pop;