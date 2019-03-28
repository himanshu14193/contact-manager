import React from 'react'
import axios from 'axios'
import {Card, CardBody} from 'reactstrap'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            isRegistered:false
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData ={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:3005/users/register",formData)
            .then(()=>this.props.history.push('/users/login'))
            .catch(err=>console.log(err))
        this.setState(()=>({
            username:'',
            email:'',
            password:''
        }))
    }
    handleChange =(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    render(){
        return (
            <div className="container">
                <Card className="m-5 bg-dark" >
                    <form onSubmit={this.handleSubmit} className="form">
                        <CardBody>
                            <h2 className="m-3  text-center">Please Register</h2>
                            <div className="form-group ml-5 mr-5">
                                <label >Username:</label>
                                <input className="form-control" type="text" value={this.state.username} onChange={this.handleChange} placeholder="enter username" name="username" required />
                            </div>

                            <div className="form-group ml-5 mr-5">
                                <label >Email:</label>
                                <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter email id" name="email" required />
                            </div>

                            <div className="form-group ml-5 mr-5">
                                <label >Password:</label>
                                <input className="form-control" type="password" value={this.state.password} onChange={this.handleChange} placeholder="enter password" name="password" required />
                            </div>

                            <input type="submit" className="btn btn-primary ml-5"/>
                        </CardBody>
                    </form>
                </Card>
            </div>
          )
    }
    
  }
  export default Register