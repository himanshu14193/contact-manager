import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            confirmPassword:'',
            notice:'',
            redirect:false,
            type:"password"
        }
    }
    handleChecked = (e) =>{
        e.target.checked?this.setState(()=>({ type:"text" })):this.setState(()=>({ type:"password" }))
    }
    handleChange =(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const{ email, password, confirmPassword}=this.state
        if(password !== confirmPassword){
            window.alert("Password didn't match")
        }else{
            const formData ={
                email,
                password
            }
            console.log(this.props)
            axios.post("http://localhost:3005/users/login",formData)
                .then(res=>{
                    localStorage.setItem('token',res.data)
                    this.props.handleIsAuthenticated(true)
                    this.setState(()=>({
                        redirect:true
                    }))
                })
                .catch(err=>{
                    console.log(err)
                    this.setState(()=>({
                        notice:err.response.data.notice
                    }))
                })
            this.setState(()=>({
                email:'',
                password:''
            }))
        }
    }
    render(){
        if(this.state.redirect){
         return   <Redirect to="/contacts" />
        }
        return (
            <div className="container">
              <h2 align="center">Log In</h2>
              {
                  this.state.notice && <p>{ this.state.notice }</p>
              }
              <form onSubmit={this.handleSubmit} className="form">
                        
                        <div className="form-group">
                            <label >Email:</label>
                            <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter email id" name="email" />
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input className="form-control" type={this.state.type} value={this.state.password} onChange={this.handleChange} placeholder="enter password" name="password"/>
                        </div>

                        <div className="form-group">
                            <label >Confirm Password:</label>
                            <input className="form-control" type="password" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="enter password" name="confirmPassword"/>
                        </div>
                        <div>
                            <input type='checkbox' onChange={this.handleChecked} className="mr-2" />
                            <label> show password</label>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </form>
            </div>
          )
    }
    
  }
  export default Login