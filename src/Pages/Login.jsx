import React, { useState } from "react";
import login from "../images/register.png";

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleInput =(e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
  }

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img src={login} alt="login" width="500" height="500" />
            </div>

            {/* login form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">login form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoCapitalize="off"
                    value={user.email}
                    onChange={handleInput}
                  ></input>
                </div>

                <div>
                  <label htmlFor="phone">password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoCapitalize="off"
                    value={user.password}
                    onChange={handleInput}
                  ></input>
                </div>

                <br />
                <button type="submit" className="btn btm-submit">
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
