const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();

app.use(cors());

const MONGO_URI = "mongodb+srv://dominicprestia0:LEtpYIl5lBchXGRj@dom0.yylbhef.mongodb.net/?retryWrites=true&w=majority&appName=Dom0"

const PORT = 5001;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        // await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error("MongoDB not Successful")
    }
}

connectDB();

mongoose.connection.on("open", () => {
  console.log("Connection to database has be established")
}
)
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
  mongoose.connection.db.admin().serverStatus().then(status => {
    console.log(status.connections);
  });
});

mongoose.connection.on("error", (error) => console.log("Here's the error that occurred: ", error))
