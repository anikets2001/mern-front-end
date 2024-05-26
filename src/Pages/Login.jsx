import React, { useState } from "react";
import login from "../images/register.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const navigate = useNavigate();
  const storeTokenInLs = useAuth();
  const [user, setUser] = useState({
    email: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);
      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server:", res_data.token);
        storeTokenInLs(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
