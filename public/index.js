const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const collection = require('./mongodb')


const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')

app.use(express.json())

app.set('view engine', 'hbs')
app.set('views', tempelatePath)

app.use(express.urlencoded({extended:false}))

app.use(express.static(publicPath))


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




app.listen(5000, () => {
    console.log("Port Connected");
})