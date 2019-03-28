const express = require('express')
const router = express.Router()
const {Contact} = require('../model/Contact')
router.get('/',function(req,res){
    Contact.find()
        .then (function(contacts){
            res.send(contacts)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.post('/',function(req,res){
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.get('/:id',function(req,res){
    const id= req.params.id
    Contact.findById(id)
        .then(function(contact){
            if(contact){
                res.send(contact)
            }
            else{
                res.send({})
            }
        })
        .catch(function(err){
            res.send(err)
        })
})
router.delete('/:id',function(req,res){
    const id= req.params.id
    Contact.findByIdAndDelete(id)
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.put('/:id',function(req,res){
    const id= req.params.id
    const body = req.body
    //finnd by id and update will not run validator
    Contact.findByIdAndUpdate(id,{$set: body},{new: true, runValidators:true})
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
module.exports = {
    contactsRouter: router
}