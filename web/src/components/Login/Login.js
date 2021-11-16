import { useContext, useState } from 'react'

import api from '../../services/api'

import { AuthContext } from '../../context/auth'

import Input from '../Inputs/Input'
import Button from '../Buttons/Button'

function Login() {
  const [formData, setFormData] = useState({
    em_user: "",
    ps_user: ""
  })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const token = localStorage.getItem("@coasts_central")
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('authenticate', formData, headers)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="em_user"
        label="Email"
        type="email"
      />
      <Input
        id="ps_user"
        label="Password"
        type="password"
      />
      <Button class="btn btn-primary" type="submit" name="Entrar" />
    </form>
  )
}

export default Login