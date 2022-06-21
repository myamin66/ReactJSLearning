import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import {DataContext} from '../DataProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export default function LoginForm() {

  const [users, setUsers] = useState([])
    const value = useContext(DataContext)

   useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')))
      // console.log("hello")
   }, [])

    const [user, setUser] = useState(value.user)

   
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {       
        
        users.forEach(element => {
          if(element.email === user.email && element.password === user.password){
              alert('Login Successful')
          }
        });
        e.preventDefault();
    }    
    

  return (
    <div style={{width: '50%', alignItems:'center', justifyContent:'center'}}>
            <h2>Login in Component</h2>
            <Form onChange={handleChange} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={user.email}  placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name = 'password' value={user.password} placeholder="Password" />
    </Form.Group>
    <Button variant="success" type="submit">
      Login
        {/* <Link to="/values" >Login</Link> */}
    </Button>
    </Form>
    </div>
  )
}
