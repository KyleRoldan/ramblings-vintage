import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/UserService"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "ramblings_user",
          JSON.stringify({
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
            id: user.id
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <div className="auth-container">

<<<<<<< HEAD
      <div className="log-in-text">Log in</div>
=======
      <div className="log-in-text">Log-in</div>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
      
      <div className= "secondary-conatiner">
        <form className="auth-form" onSubmit={handleLogin}>
          
          <div className="auth-box">
            <div className="auth-fieldset">
              <input
                type="email"
                value={email}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </div>
           
           <div className="auth-fieldset">
            <div>
<<<<<<< HEAD
              <button className="classic-button" type="submit">Sign In</button>
=======
              <button class="classic-button" type="submit">Sign In</button>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
            </div>
          </div>
        
        </form>
      </div>
      <div className="newUser-box">New user?</div>
      
      <div className="register-link">
<<<<<<< HEAD
        <Link to="/register"><button className="classic-button" type="submit">Join Now</button></Link>
=======
        <Link to="/register"><button class="classic-button" type="submit">Join Now</button></Link>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
      </div>

    </div>
  )
}

