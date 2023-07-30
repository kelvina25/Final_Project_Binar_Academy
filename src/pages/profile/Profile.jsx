import React, { useState, useEffect } from "react";
import "./profile.css";
import { ArrowBack, Create, Output } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/actions/user";
import { toast } from "react-toastify";

const Profile = () => {
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const user = useSelector((state) => state.auth.user[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [changeEmail, setChangeEmail] = useState(user?.email);
  const [changeName, setChangeName] = useState("");
  const [changePhoneNumber, setChangePhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (changeName === "") {
      toast.error("Please change your name");
    }
    if (changePhoneNumber === "") {
      toast.error("Please change your phone number");
    }
    if (changeEmail === "") {
      toast.error("Please input your email");
      return;
    }

    dispatch(
      updateProfile({
        userId: user.userId,
        name: changeName,
        email: changeEmail,
        phoneNumber: changePhoneNumber,
      })
    );
  };

  return (
    <div className="profile">
      <div className="profileHeaderBox">
        <div className="profileHeader">
          <h2 className="profileTitle">Akun</h2>
          <div className="profileResultMenu">
            <ArrowBack
              onClick={() => window.history.back()}
              className="searchBtnBack"
            />
            <div className="profileResultText">
              <p className="adaalah">Beranda </p>
            </div>
          </div>
        </div>
      </div>
      <div className="profileContainer">
        <div className="profileMenu">
          <div className="ubahProfile">
            <Create className="ubahProfileIcon" />
            <p className="ubahProfileText">Ubah Profile</p>
          </div>
          <div
            className="ubahProfile"
            // style={pointer}
            onClick={() => dispatch(logout(navigate))}
          >
            <Output className="ubahProfileIcon" />
            <p className="ubahProfileText">Keluar</p>
          </div>
        </div>
        <div className="profileMain">
          <div className="ubahProfilMain">
            <h2>Ubah Data Profil</h2>
            <div className="ubahProfilFormContainer">
              <h3>Data Diri</h3>
              <form className="ubahProfilForm" onSubmit={handleSubmit}>
                <p className="inputTitle">Nama Lengkap</p>
                <input
                  placeholder={user?.name}
                  type="text"
                  value={changeName}
                  onChange={(e) => setChangeName(e.target.value)}
                />
                <p className="inputTitle">Nomor Telepon</p>
                <input
                  placeholder={user?.phoneNumber}
                  type="text"
                  value={changePhoneNumber}
                  onChange={(e) => setChangePhoneNumber(e.target.value)}
                />
                <p className="inputTitle">Email</p>
                <input
                  placeholder={user?.email}
                  type="email"
                  value={changeEmail}
                  onChange={(e) => setChangeEmail(e.target.value)}
                  disabled
                />

                <button type="submit">Simpan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
