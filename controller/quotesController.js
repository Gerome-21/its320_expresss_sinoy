import Quotes from '../models/quotesModel.js'

function createQuotes(req, res){
    const {quote, author, published, title} = req.body;

    if (!quote || !author || !published || !title) {
        res.send('Please fill out all feilds.')
    }

    // const exists = User.findOne({username})

    // if(exists) {
    //     res.status(409).send('Username alredy exists.')
    //     throw new Error('Username already exists.')
    // }

    const newQuotes = Quotes.create({
        quote, author, published, title
    })

    if (!newQuotes){
        res.status(500).send('Error while creating user.')
    }

    return res.status(200).send('User successfully created.')
}

async function getQuotes(req, res) {
    try{
        const quotes = await Quotes.find();
        
        if (quotes){
            return res.status(200).json(quotes);
        } else {
            return res.status(404).json({messsage: "No quotes yet."});
        }
    } catch (error){
        console.error("Error getting quotes:", error);
        return  res.status(500).json(
            {messsage:'Something went wrong while getting quotes'}
        );
    }
}
export {createQuotes,getQuotes };
