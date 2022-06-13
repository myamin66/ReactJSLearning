import React, { useState } from 'react'

export default function Form() {

  const [nameP, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.nameP)
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.email)
  }
  const handlePhoneChange = (e) =>{
    setPhonenumber(e.target.phonenumber)
  }

  return (
    <div>
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={nameP}
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            value={phonenumber}
            placeholder="Phone Number"
            onChange={handlePhoneChange}
          />
        </div>
        <div> 
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  )
}
