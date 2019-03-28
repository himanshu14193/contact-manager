import React from 'react'
import axios from'axios'
import NoteForm from "./Form"
class NewNote extends React.Component{
    handleSubmit = (formData) =>{
        axios.post('http://localhost:3005/notes', formData)
            .then(() => this.props.history.push('/notes'))
            .catch(err => console.log(err))
    }
    render(){
        return (
            <div className="container">
                <NoteForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default NewNote