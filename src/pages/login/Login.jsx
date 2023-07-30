
import React, { useState } from "react";
import "./login.css";
import auth from "../../assets/auth.jpg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { login } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    if (email === "") {
      toast.error("Email is required");
    }
    if (password === "") {
      toast.error("Password is required");
      return;
    }
    dispatch(login(data, navigate));
  };


  return (
    <div className="Login">
      <img className="bg-login" src={auth} alt="" />
      <div className="login-form">
        <h2>Masuk</h2>
        <form onSubmit={onSubmit}>
          <p>Email</p>
          <input
            className="email-input"
            placeholder="contoh: johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="password">
            <p>Password</p>
            <a href={"resetpassword"}> lupa kata sandi?</a>
          </label>
          <div className="password-input">
            <input
              value={password}
              type={visible ? "text" : "password"}
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="password-icon" onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <button className="btn-signin">Masuk</button>
        </form>
        <div className="regist-account">
          <p>Belum punya akun?</p>
          <a href={"register"}>Daftar di sini</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
