import React, { useContext, useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider';


 
function Signup() {
    const [users, setUsers] = useState([])
    const value = useContext(DataContext)

    

    const [user, setUser] = useState(value.user)

   
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
        // value.setUser({...value.user, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {       
      
        setUsers([...users, user])
        console.log(users)
        localStorage.setItem('users', JSON.stringify(users))
        e.preventDefault();
    }


   
    return (
    <div style={{width: '50%', alignItems:'center', justifyContent:'center'}}>
            <h2>Signup Component</h2>
        <Form onChange={handleChange} onSubmit={handleSubmit}>
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={user.password} />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
{/*     
    <Link to="/values" >Signup Button</Link> */}
  </Button>
</Form>
    </div>
    
  )
}

export default Signup