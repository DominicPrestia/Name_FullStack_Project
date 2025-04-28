//////////////////////////
//Controllers are just an area to put functions that handle requests and responses from the client. It's just a file structure to keep the routes files cleaner instead of having all the logic for your routes in the routes folder you put the logic in the controllers and then import them into the routes. It's not necessary, but makes the routes file much easier to read. 
//////////////////////////
import Name from '../models/nameContent.js';



const getNames = async (req, res) => {

    try {
        const name = await Name.find();
        res.status(200).json(name);
    } catch (error) {
        res.status(404).json({message:error.message})
        // console.log("Error getting names: ", error)
    }

}

const createNames = async (req, res) => {

    console.log("Reached create names")

    const body = req.body;
    console.log("Request Body: ", req.body);

    const newName = new Name({
        ...body
    })

    try {
        
        await newName.save(); //.save() is a mongoose method. More method examples include (but not limited to):
        // Create: create(), save()
        
        // Read: find(), findOne(), findById()
        
        // Update: updateOne(), updateMany(), findOneAndUpdate()
        
        // Delete: deleteOne(), deleteMany()
        
        // Aggregation: aggregate(), countDocuments(), distinct()

        const updatedNames = await Name.find();

        res.status(200).json(updatedNames);

    } catch (error) {
        console.log("Error: ", error);
    }
}

export { getNames, createNames };





////////This used to be in the getNames section beacuse I wanted to look at what pulling from a database looked like. I used a mongo Sample DB so it looks different than what I'm doing with the names app
// try {
  
//     const comments = await mongoose.connection
//     .collection('comments') // collection name
//     .find({})
//     .limit(10)
//     .toArray(); //convert cursor to array

//     console.log("Names fetched:");
//     res.status(200).json(comments);
// } catch (error) {
//     console.error('Error fetching names:', error);
//     res.status(500).json({ message: 'Failed to get names', error: error.message });
// }

// }