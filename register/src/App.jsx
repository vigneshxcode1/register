import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [name, setName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

const Submit=(e)=>{
e.preventDefault()
axios.post('http://localhost:3001/register',{name,email,password})
.then((result)=>console.log(result.data))
.catch((err)=>console.log(err))
}
  return (
    <>
      <div>
        <h1>register</h1>
        <form onSubmit={Submit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} ></input>
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e)=>setemail(e.target.value)}></input>
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        </div>
        <button type='submit'>Register</button>
        <p>Already have a account</p>
        </form>
      
      </div>
    </>
  )
}

export default App
