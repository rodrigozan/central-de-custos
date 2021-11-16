import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Input from '../components/Inputs/Input'
import Input from '../components/Buttons/Button'

function addCentral() {
  const [create, setCreate] = useState(true)
  const [user, setUser] = useState("")
  return (
    <form>
      <Input
        {...create ? value = "" : value = {}}
        id="nm_user" l
        abel="Nome"
        type="text"
      />
      <Input
        {...create ? value = "" : value = {}}
        id="em_user"
        label="Email"
        type="email"
      />
      <Input
        {...create ? value = "" : value = {}}
        id="ps_user"
        label="Password"
        type="password"
      />
      <Button class="btn btn-primary" type="submit" />
    </form>
  )
}

function updateCentral() {
  return ()
}

function deleteCentral() {
  return ()
}

export default { addCentral, updateCentral, deleteCentral }