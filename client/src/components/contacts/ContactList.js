import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class ContactsList extends React.Component {
    constructor(){
        super()
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3005/contacts")
            .then(res=> this.setState(()=>({ contacts:res.data })))
            .catch(err=> console.log(err))
    }
    render(){
        return (
                <div className="container ">
                    {    this.state.contacts.length === 0 ? (<p> No contacts found. Add your first Contact</p>) : 
                        (
                            <div> 
                                <h2 align="center">Listing Contacts - {this.state.contacts.length} </h2>
                                <ul className="list-group">
                                    { this.state.contacts.map(contact => {
                                        return (
                                            <div key={contact._id} >
                                                <li  className="list-group-item list-group-item-dark"><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    }
                    <Link to="/contacts/new">Add Contact</Link>
                </div>
          )
    }
}
  export default ContactsList