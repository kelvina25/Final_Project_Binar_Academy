

import React, { useState } from 'react'
import './register.css'
import auth from '../../assets/auth.jpg'
import { register } from '../../redux/actions/auth'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visible, setVisible] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name, phoneNumber };

    if (email==="") {
      toast.error("Email is required")
    } if (password===""){
      toast.error("Password is required")
    } if (name===""){
      toast.error("Name is required")
    } if (phoneNumber===""){
      toast.error("Phone number is required")
      return
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className="register">
      <img src={auth} className="bg-register" alt="" />
      <div className="register-form">
        <h2>Daftar</h2>
        <form onSubmit={onSubmit}>
          <p>nama</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nama'
          />
          <p>Email</p>
          <input
            placeholder='contoh: johndoe@gmial.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <p>Nomor Telepon</p>
          <input
            type='nomor hp'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Nomor Telepon'
          />
          <p>Password</p>
          
          <div className='password-input' >
            <input
              placeholder='Masukkan Password'
              value={password}
              type={visible ? "text" : "password"}
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="password-icon" onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          <button className='btn-register'>Masuk</button>
        </form>
        <div className="regist-account">
          <p>Sudah punya akun?</p>
          <a href={"login"}>Masuk di sini</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
