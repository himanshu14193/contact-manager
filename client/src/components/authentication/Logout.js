import React from 'react'
import axios from 'axios'
class Logout extends React.Component{
    
    componentDidMount(){
        const token=localStorage.getItem('token')
        axios.delete("http://localhost:3005/users/logout",{headers:{"x-auth":token}})
            .then(()=>{
                this.props.history.push('/')
                this.props.handleIsAuthenticated(false)
                localStorage.clear()
            })
            .catch(err=>console.log(err))        
    }
    render(){
        return(
            <div>
            </div>
        )
    }
  }
  export default Logout