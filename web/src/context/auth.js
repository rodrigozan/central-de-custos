import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider(props) {
  const [user, setUser] = useState('')

  const signInUrl = 'http://localhost:3500/authenticate/'

  async function signIn(email, password) {
    const response = await api.post('authenticate', {
      em_user: email,
      ps_user: password
    })

    const { token, user } = response.data

    localStorage.setItem('@costs_central:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)

  }

  async function signOut() {
    setUser(null)
    localStorage.removeItem('@costs_central:token')
  }

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )

}