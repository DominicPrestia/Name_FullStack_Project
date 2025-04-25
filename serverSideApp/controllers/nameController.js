//////////////////////////
//Controllers are just an area to put functions that handle requests and responses from the client. It's just a file structure to keep the routes files cleaner instead of having all the logic for your routes in the routes folder you put the logic in the controllers and then import them into the routes. It's not necessary, but makes the routes file much easier to read. 
//////////////////////////

import mongoose from 'mongoose'



const getNames = async (req, res) => {

    try {
  
        const comments = await mongoose.connection
        .collection('comments') // collection name
        .find({})
        .limit(10)
        .toArray(); //convert cursor to array

        console.log("Names fetched:");
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching names:', error);
        res.status(500).json({ message: 'Failed to get names', error: error.message });
    }

}

export { getNames };