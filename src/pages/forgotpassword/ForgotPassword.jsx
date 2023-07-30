import React, { useState } from 'react'
import './forgotpassword.css'
import auth from '../../assets/auth.jpg'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';



const ForgotPassword = () => {
  const [password, setPassword] = useState("")
  const [newpassword, setNewPassword] = useState("")
  const [visible, setVisible] = useState(false)
  const [visibility, setVisibility] = useState(false)

  return (
    <div className='ForgotPassword'>
      <img src={auth} className='bg-forgot' />
      <div className='forgot-form'>
        <form>
          <h2>Reset Password</h2>
          <label>Email/No Telepon</label>
          <input placeholder='contoh: johndoe@gmial.com' />
          <label>Masukkan Password Baru</label>
          <div className='password-input' >
            <input
              value={password}
              type={visible ? "text" : "password"}
              id='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="password-icon" onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <label>Ulangi Password Baru</label>
          <div className='password-input' >
            <input
              value={newpassword}
              type={visibility ? "text" : "password"}
              id='password'
              placeholder='password'
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>
            <div className="password-icon" onClick={() => setVisibility(!visibility)}>
              {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <button className='btn-forgot'>Masuk</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword