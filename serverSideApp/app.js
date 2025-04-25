import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import nameRoutes from './routes/names.js'
//Should require .env when ready

const app = express();

app.use(cors());

//This middleware runs for all requests. 
app.use((req, res, next) => {
    console.log('1. Middleware runs for all requests');
    next();
  });

//What this does is say, everytime the user goes to https://localhost:5001/names. It adds the /names to the .get("/") in the names.js route
app.use("/names", nameRoutes);
app.use((req,res) => {
    res.status(404).json({error:"Endpoint not found"});
})

///////////Need to add MONG_URI and PORT to .env. 
const MONGO_URI = "mongodb+srv://dominicprestia0:LEtpYIl5lBchXGRj@dom0.yylbhef.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Dom0"

const PORT = 5001;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        // await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        app.listen(PORT, ()=> console.log('Server running on port: ', PORT))
        // const collections = await mongoose.connection.db.listCollections().toArray();
// console.log(collections.map(c => c.name));
    }
    catch (error) {
        console.error("MongoDB not Successful: ", error)
    }
}

connectDB();

mongoose.connection.on("open", () => {
  console.log("Connection to database has be established")
}
)

mongoose.connection.on("error", (error) => console.log("Here's the error that occurred: ", error))
