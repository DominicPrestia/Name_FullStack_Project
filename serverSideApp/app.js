import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import nameRoutes from './routes/names.js'
//Should require .env when ready

const app = express();


////////////////////This middleware runs for all requests. 
// app.use((req, res, next) => {
//     console.log('1. Middleware runs for all requests');
//     next();
//   });
////////////////////
app.use(express.json());
app.use(cors());
app.use("/names", nameRoutes);//What this does is say, everytime the user goes to https://localhost:5001/names. It adds the /names to the .get("/") in the names.js route


////////////////////Need to add MONG_URI and PORT to .env.
//note that 'Test_NamesAppDB' in the URI is the name of the database
//The collection name is specified in the model. In this app it is the nameContent.js file in the models folder
const MONGO_URI = "mongodb+srv://dominicprestia0:LEtpYIl5lBchXGRj@dom0.yylbhef.mongodb.net/Test_NamesAppDB?retryWrites=true&w=majority&appName=Dom0"
const PORT = 5001;
////////////////////


const connectDB = async () => {
  try {

    await mongoose.connect(MONGO_URI); //This is connecting to mongoDB

    //notifying in console that MongoDB connected
    console.log("Pinged. You successfully connected to MongoDB!");

    //This tells server to start listening on PORT
    app.listen(PORT, () => console.log('Server running on port: ', PORT))
  }
  catch (error) {
    //if connection to mongoDB wasn't successful show error
    console.error("MongoDB not Successful: ", error)
  }
}

connectDB();

mongoose.connection.on("open", () => {
  console.log("Connection to database has be established")
})

mongoose.connection.on("error", (error) => console.log("Here's the error that occurred: ", error))
