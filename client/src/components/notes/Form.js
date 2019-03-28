import React from 'react'
class NotesForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            tags:[]
        }
    }
    componentWillReceiveProps(NextProps){
        console.log(NextProps)
        const { title, body, tags } = NextProps.note
        this.setState(()=>({
            title, body, tags
        }))
    }
    handleTitleChange = (e) => {
        const title= e.target.value
        this.setState(()=>({ title }))
    }
    handleBodyChange = (e) => {
        const body= e.target.value
        this.setState(()=>({ body }))
    }
    handleTagsChange = (e) => {
        const tags= e.target.value
        this.setState(()=>({ tags }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData ={
            title:this.state.title,
            body:this.state.body,
            tags:this.state.tags
        }
        this.props.handleSubmit(formData)
        this.setState(()=>({
            title:'', body:'', tags:[]
        }))
    }
    render(){
        return (
                <div>
                <h2 align="center">Add New Note</h2>
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-group">
                            <label >Title:</label>
                            <input className="form-control" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title"/>
                        </div>

                        <div className="form-group">
                            <label >Body:</label>
                            <input className="form-control" type="text" value={this.state.body} onChange={this.handleBodyChange} placeholder="Text goes here" />
                        </div>

                        <div className="form-group">
                            <label >Tags:</label>
                            <input className="form-control" type="text" value={this.state.tags} onChange={this.handleTagsChange} placeholder="Enter tags"/>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
          )
    }
}
  export default NotesForm