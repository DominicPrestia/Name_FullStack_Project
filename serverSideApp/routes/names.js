import { Router } from "express";
import { getNames } from '../controllers/nameController.js'

const router = Router();


//This is saying what to do if a user goes to https://localhost:5001
//But the middlware in app.js app.use("/names", nameRoutes) is adding the /names to the url. Users will reach route only by https://localhost:5001/names
//.get .post etc. are route handlers
router.get("/", getNames)

export default router;