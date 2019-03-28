import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardText, CardHeader} from 'reactstrap'
import { Link } from 'react-router-dom'
class NotesList extends React.Component {
    constructor(){
        super()
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3005/notes")
            .then(res=> this.setState(()=>({ notes:res.data })))
            .catch(err=> console.log(err))
    }
    render(){
        return (
                <div className="container">
                    {    this.state.notes.length === 0 ? (<p> No notes found. Add your first Note</p>) : 
                        (
                            <div> 
                                <h2 className="text-light" align="center">Listing notes - {this.state.notes.length} </h2>
                                
                                    { this.state.notes.map(note => {
                                        return (
                                            <Card  body inverse style={{ backgroundColor: '#222', borderColor: '#333' }} className="text m-1" key={note._id}>
                                                <CardHeader  tag="h4"><Link to={`/notes/${note._id}`}>{note.title}</Link></CardHeader>
                                                <CardBody>
                                                    <CardText tag="h6">{note.body}</CardText>
                                                    <CardText tag="h6">{note.tags}</CardText>
                                                </CardBody>    
                                            </Card>                            
                                        )
                                    })}
                                
                            </div>
                        )
                    }
                    <Link to="/notes/new">Add NewNote</Link>
                </div>
          )
    }
}
  export default NotesList