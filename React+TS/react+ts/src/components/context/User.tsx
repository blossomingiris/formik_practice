//initial context unknown
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
  const userContext = useContext(UserContext)

  //with null check
  // const handleLogin = () => {
  //   if (userContext)
  //     userContext.setUser({
  //       name: 'Jane Doe',
  //       email: 'jdoe@example.com',
  //     })
  // }
  // const handleLogout = () => {
  //   if (userContext) {
  //     userContext.setUser(null)
  //   }
  // }
  //without null check
  const handleLogin = () => {
    userContext.setUser({
      name: 'Jane Doe',
      email: 'jdoe@example.com',
    })
  }

  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <>
      {' '}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </>
  )
}
