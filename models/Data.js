//step 5
const mongoose = require('mongoose')

//Schema for data

const characterData = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    image: {
        type: String,
        required: [true, '']

    },
    bio: {

    },
    quote: {

    },
    alignment: {

    }
},
{
    //WHAT?WHY?
    timestaps: true
}
)