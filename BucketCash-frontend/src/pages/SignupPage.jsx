import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/authService"
import Logo from "../components/Logo"
import AuthContext from "../context/AuthContext"
function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const { setErr: setAuthError } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null)
    setError(null)
    setIsLoading(true)

    try {
      await registerUser({ username, email, password })
      alert("Registered successfully, pls login")
    } catch (error) {
      setError(error.response.data.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Logo />

      <div>SignupPage</div><form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  )
}

export default SignupPage
