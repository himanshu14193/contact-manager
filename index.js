const express = require('express')
const {mongoose} = require('./config/database')
const { contactsRouter } = require('./app/controller/ContactsController')
const { notesRouter } = require('./app/controller/NotesController')
const { usersRouter } = require('./app/controller/UsersController')
const port = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type,x-auth')
    
    next()
})
app.use('/contacts',contactsRouter)
app.use('/notes',notesRouter)
app.use('/users',usersRouter)
app.listen(port,function(){
    console.log('listening to port', port)
})