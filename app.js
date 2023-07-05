const express = require('express')
const morgan = require('morgan')
const Name = require('./models/names')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))
const mongoose = require('mongoose')

const uri = "mongodb+srv://oladev:ola.ejs@nodecrash.nltrmcu.mongodb.net/tndb?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(result => {
        const port = 3000
        app.listen(port, () => console.log(`app listening on port ${port}!`))

    }).catch(err => console.log(err))

// 

app.get('/', (req, res) =>  {
   
    res.redirect('/names')
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
// name Handlers

app.get('/names', (req, res) => {
    Name.find().sort({ createdAt: -1})
    .then(result => {
        res.render('index', { title: 'title', names: result})
    }).catch(err => console.log(err))
})

app.get('/names/create', (req, res) => {
    res.render('create', { title: "AddNew" })
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Error-404" })
})
