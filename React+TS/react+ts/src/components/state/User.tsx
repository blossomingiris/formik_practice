import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null)
  // const handleLogin = () => {
  //   setUser({
  //     name: 'Jane Doe',
  //     email: 'jdoe@example.com',
  //   })
  // }
  // const handleLogout = () => {
  //   setUser(null)
  // }

  //type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Jane Doe',
      email: 'jdoe@example.com',
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      {/* <button onClick={handleLogout}>Log Out</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
