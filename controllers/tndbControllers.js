const Name = require('../models/names')

const getallnames_controller = (req, res) => {
    Name.find().sort({ createdAt: -1})
    .then(result => {
        res.render('index', { title: 'Home', names: result})
    }).catch(err => console.log(err))
}

const addname_controller =  (req, res) => {
    res.render('create', { title: "AddNew" })
}

const getsinglename_controller = (req, res) => {
    const id = req.params.id
    
    Name.findById(id)
    .then(result => {
        res.render('details', { title: 'name Details', name: result })
    }).catch(err => console.log(err))
}

const postname_controller = (req, res) => {
    const name = new Name(req.body)
    
    name.save().then(result => {
       res.redirect('/')
    }).catch(err => {
       console.log(err)
    })
}

const deletesinglename_controller = (req, res) => {
    const id = req.params.id;

    Name.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: result })
    }).catch(err => {
        console.log(err)
    })
}
module.exports = {
    getallnames_controller,
    addname_controller,
    getsinglename_controller,
    postname_controller,
    deletesinglename_controller
}