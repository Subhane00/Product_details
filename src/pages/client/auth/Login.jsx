

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.email || !form.password || (!isLogin && !form.name)) {
  
Swal.fire({
  icon: "error",
  text: "BÜTÜN XANALARI DOLDURUN!",
});
    return; 
  }

  if (isLogin) {
    // LOGIN
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === form.email && user.password === form.password) {
     Swal.fire({
  title: "UĞURLU LOGİN",
  icon: "success"
});
      navigate("/dashboard"); 
    } else {
      Swal.fire({
  icon: "error",
  text: "USER YALNIŞDIR",
});
    }

  } else {
    // REGISTER
    localStorage.setItem("user", JSON.stringify(form));
    Swal.fire({
  title: "UĞURLU REGİSTER",
  icon: "success"
});
    setIsLogin(true); //register-login
    setForm({
      name: "",
      email: "",
      password: ""
    });
  }
};

  return (
    <div className="login-form" style={{ width: "300px", margin: "100px auto" }}>
      <h2 style={{ color: "white" }}>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            style={{ borderRadius: "20px", marginTop: "10px" }}
          />
        )}

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ borderRadius: "20px" }}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ borderRadius: "20px" }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            marginLeft: "65px",
            width: "70px",
            padding: "5px",
            borderRadius: "20px",
            backgroundColor: "white",
            color: "#BDEB69",
            cursor: "pointer"
          }}
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Hesabın yoxdur? Register" : "Artıq hesabın var? Login"}
      </p>
    </div>
  );
}

export default Login;