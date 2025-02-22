import mongoose from 'mongoose';

const quotesSchema = new mongoose.Schema({
    quote: { type: String, required:[true, 'Please provide a quote'] },
    author: { type: String, required:[true, 'Please provide a author'] },
    published: { type: String, required: [true, 'Please provide a published'] },
    title: { type: String, required: [true, 'Please provide a title'] }
});


// export default userSchema;

export default mongoose.model('Quotes', quotesSchema)