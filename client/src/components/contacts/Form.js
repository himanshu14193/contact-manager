import React from 'react'
class ContactsForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:''
        }
    }
    componentWillReceiveProps(NextProps){
        const { name, email, mobile } = NextProps.contact
        this.setState(()=>({
            name, email, mobile
        }))
    }
    handleNameChange = (e) => {
        const name= e.target.value
        this.setState(()=>({ name }))
    }
    handleEmailChange = (e) => {
        const email= e.target.value
        this.setState(()=>({ email }))
    }
    handleMobileChange = (e) => {
        const mobile= e.target.value
        this.setState(()=>({ mobile }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData ={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
        this.setState(()=>({
            name:'', email:'', mobile:''
        }))
    }
    render(){
        return (
                <div>
                    <h2 align="center">Add Contact Information</h2>
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-group">
                            <label >Name:</label>
                            <input className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="enter your name"/>
                        </div>

                        <div className="form-group">
                            <label >Email:</label>
                            <input className="form-control" type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="enter your email" />
                        </div>

                        <div className="form-group">
                            <label >Mobile:</label>
                            <input className="form-control" type="text" value={this.state.mobile} onChange={this.handleMobileChange} placeholder="enter your mobile number"/>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
          )
    }
}
  export default ContactsForm