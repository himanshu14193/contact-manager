import React from 'react'
import axios from 'axios'
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
              <h2 align="center">Sign Up here...</h2>
              <form onSubmit={this.handleSubmit} className="form">
              <div className="form-group">
                  <label >Username:</label>
                  <input className="form-control" type="text" value={this.state.username} onChange={this.handleChange} placeholder="enter username" name="username" />
              </div>

              <div className="form-group">
                  <label >Email:</label>
                  <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter email id" name="email" />
              </div>

              <div className="form-group">
                  <label >Password:</label>
                  <input className="form-control" type="password" value={this.state.password} onChange={this.handleChange} placeholder="enter password" name="password" />
              </div>

              <input type="submit" className="btn btn-primary"/>
          </form>
            </div>
          )
    }
    
  }
  export default Register