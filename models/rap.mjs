import mongoose from 'mongoose';

const rapSchema = new mongoose.Schema({
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

const Rap = mongoose.model('Rap', rapSchema);

export default Rap;