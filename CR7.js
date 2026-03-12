import mongoose from "mongoose"

mongoose.connect(`mongodb+srv://Kursant:bGYaHOdOaDgMCrJD@cluster0.txdbiqt.mongodb.net/?appName=Cluster0`)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))