import User from '../models/userModel.js';

function createUser(req, res){
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.send('Please fill out all feilds.')
    }

    // const exists = User.findOne({username})

    // if(exists) {
    //     res.status(409).send('Username alredy exists.')
    //     throw new Error('Username already exists.')
    // }

    const newUser = User.create({
        username, email, password
    })

    if (!newUser){
        res.status(500).send('Error while creating user.')
    }

    return res.status(200).send('User successfully created.')
}

export {createUser};