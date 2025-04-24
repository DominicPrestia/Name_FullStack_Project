//////////////////////////
//Controllers are just an area to put functions that handle requests and responses from the client. It's just a file structure to keep the routes files cleaner instead of having all the logic for your routes in the routes folder you put the logic in the controllers and then import them into the routes. It's not necessary, but makes the routes file much easier to read. 
//////////////////////////



const getNames = async (req, res) => {

    try {
        res.send("My Names App");
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export { getNames };