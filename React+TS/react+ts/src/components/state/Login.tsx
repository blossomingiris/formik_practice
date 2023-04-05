import { useState } from 'react'

export const Login = () => {
  const [isLoggedIn, setIsLogged] = useState(false)
  const handleLogIn = () => {
    setIsLogged(true)
  }
  const handleLogOut = () => {
    setIsLogged(false)
  }

  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? 'log in' : 'log out'}</div>
    </div>
  )
}
