import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Home from "./components/layouts/home"
import ContactList from "./components/contacts/ContactList"
import ContactNew from "./components/contacts/New"
import ContactShow from "./components/contacts/ContactShow"
import ContactEdit from "./components/contacts/ContactEdit"
import NoteList from "./components/notes/NoteList"
import NoteNew from "./components/notes/Notenew"
import NoteShow from "./components/notes/NotesShow"
import NoteEdit from "./components/notes/NotesEdit"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Logout from "./components/authentication/Logout"

class App extends Component {
  constructor(){
    super()
    this.state={
      collapsed: true,
      isAuthenticated:!!localStorage.getItem('token')
    }
  }
  toggleNavbar =() =>{
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  handleIsAuthenticated=(bool)=>{
    this.setState(()=>({
      isAuthenticated:bool
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavbarBrand href="/" className="mr-4">Contact Manager</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                  { this.state.isAuthenticated &&
                    <Nav navbar className="mr-auto">
                        <NavItem>
                          <Link to="/contacts" className="nav-link active" >Contacts</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/notes" className="nav-link active" >Notes</Link>
                        </NavItem>
                    </Nav>
                  }
                  { this.state.isAuthenticated ?

                        <Nav className='rightNav ml-auto' navbar>
                          <NavItem>
                            <Link to="/users/logout" className="nav-link active" >Logout</Link>
                          </NavItem>
                        </Nav>
                        :
                        <Nav className='rightNav ml-auto' navbar>  
                          <NavItem>
                            <Link to="/users/login" className="nav-link active" >Login</Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/users/register" className="nav-link active" >Register</Link>
                          </NavItem>
                        </Nav>

                  }
                  </Collapse>
          </Navbar>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/contacts" component={ContactList} exact={true} />
            <Route path="/contacts/new" component={ContactNew} exact={true} />
            <Route path="/contacts/edit/:id" component={ContactEdit} />
            <Route path="/contacts/:id" component={ContactShow} />
            <Route path="/notes" component={NoteList} exact={true} />
            <Route path="/notes/new" component={NoteNew} exact={true} />
            <Route path="/notes/edit/:id" component={NoteEdit} exact={true} />
            <Route path="/notes/:id" component={NoteShow} />
            <Route path="/users/register" component={Register} exact={true} />
            <Route path="/users/login" render={()=><Login handleIsAuthenticated={this.handleIsAuthenticated} />} exact={true} />
            <Route path="/users/logout" render={(props)=><Logout {...props} handleIsAuthenticated={this.handleIsAuthenticated} />} exact={true}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
