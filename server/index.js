const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const collection = require('./mongodb')

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.get("/contact_me", (req, res) => {
    res.render("contact_me")
})

app.post("/contact_me",async (req, res)=>{

    const data = {
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }

    await collection.insertMany([data])

    res.render("contact_me")

})

app.listen(8000, () => {
    console.log("Port Connected");
})