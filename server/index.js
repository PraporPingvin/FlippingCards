const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors")
const app = express()
const PORT = config.get("serverPort")

const setRouter = require("./routes/set.routes")
const cardRouter = require("./routes/card.routers")

app.use(express.json())
app.use(cors())
app.use("/api/set", setRouter)
app.use("/api/card", cardRouter)

const start = ()=>{
    try{
        mongoose.connect(config.get("dbUrl"))
        app.listen(PORT,()=>{
            console.log("Server started on port", PORT)
        })
    }
    catch(e){

    }
}
start()