const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const nameRoutes = require('./routes/tndbRoutes')
const env = require('dotenv').config()
const app = express()



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}));



mongoose.connect(process.env.DB_URI)
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

// routes
app.use('/names', nameRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: "Error-404" })
})
