import "./navbar.css";

import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import LoginIcon from "@mui/icons-material/Login";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "../../redux/actions/notif";
import { getProfile, logout } from "../../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pointer = { cursor: "pointer" };
  const { notifs } = useSelector((state) => state.notif);

  const { isLoggedIn, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile(navigate));
    }
  }, [dispatch, isLoggedIn, navigate, token]);

  return (
    <div className="navbarr">
      {isLoggedIn ? (
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="" />
          </Link>
          <div className="navbar__menu">
            <FormatListBulletedIcon
              sx={{ fontSize: 24 }}
              style={pointer}
              onClick={() => navigate("/history")}
            />
            {notifs.length > 0 ? (
              <NotificationsActiveIcon
                sx={{ fontSize: 24 }}
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => navigate("/notifikasi")}
              />
            ) : (
              <NotificationsNoneIcon
                sx={{ fontSize: 24 }}
                style={pointer}
                onClick={() => navigate("/notifikasi")}
              />
            )}

            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 24 }}
              style={pointer}
              onClick={() => navigate("/profile")}
            />
            <LogoutIcon
              sx={{ fontSize: 24 }}
              style={pointer}
              onClick={() => dispatch(logout(navigate))}
            />
          </div>
        </div>
      ) : (
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="" />
          </Link>
          <button onClick={() => navigate("/login")}>
            <LoginIcon sx={{ color: "white" }} /> Masuk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
