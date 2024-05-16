import React, { useState } from "react";
import register from "../images/register.png";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // by default form will refresh the page to stop that default behavior we user e.preventDefault()
    e.preventDefault();
    console.log(user);
  };

  return (
    <section>
      <main>
      <div className="section-registration">
      <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src={register} alt="register" width="500" height="500" />
            </div>

            {/* registration form */}
            <div className="registration-form">
              <h1 className="main-heading-mb-3">registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoCapitalize="off"
                    value={user.username}
                    onChange={handleInput}
                  ></input>
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    id="email"
                    required
                    autoCapitalize="off"
                    value={user.email}
                    onChange={handleInput}
                  ></input>
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="enter your phone number"
                    id="phone"
                    required
                    autoCapitalize="off"
                    value={user.phone}
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
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
