import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role: ''});

  /**
   * 1. Create state variables to hold team members
   * 2. hold form values
   * 
   * 3. Create update and submit functions
   */

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({name: '', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value});
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
     />
     {members.map((member, index) => {
        return (
          <div key={index}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
     })}
    </div>
  );
}

export default App;
