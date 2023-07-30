import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import Booking from "./pages/booking/Booking";
import History from "./pages/history/History";
import Navbar from "./components/navbar/Navbar";
import Notifikasi from "./pages/notifikasi/Notifikasi";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import RedirectIfProtected from "./components/auth/RedirectProtected";
import Protected from "./components/auth/Protected";

function App() {
  useEffect(() => {
    function handleContextMenu(e) {
      if (process.env.NODE_ENV !== "development") {
        e.preventDefault(); // prevents the default right-click menu from appearing
      }
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("contextmenu", handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);


  

  return (
    

    <Provider store={store}>


      <BrowserRouter>
        <Navbar />
        <ToastContainer theme="colored" />
        <Routes>
          <Route
            path="/login"
            element={
              <RedirectIfProtected>
                <Login />
              </RedirectIfProtected>
            }
          />
          <Route
            path="/register"
            element={
              <RedirectIfProtected>
                <Register />
              </RedirectIfProtected>
            }
          />

          <Route path="/resetpassword" element={<ForgotPassword />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/booking/pemesan"
            element={
              <Protected>
                <Booking />
              </Protected>
            }
          />
          <Route
            path="/booking/penumpang"
            element={
              <Protected>
                <Booking />
              </Protected>
            }
          />

          <Route
            path="/booking/checkout"
            element={
              <Protected>
                <Booking />
              </Protected>
            }
          />
          <Route
            path="/booking/payment"
            element={
              <Protected>
                <Booking />
              </Protected>
            }
          />
          <Route
            path="/booking/success"
            element={
              <Protected>
                <Booking />
              </Protected>
            }
          />
          <Route
            path="/history"
            element={
              <Protected>
                <History />
              </Protected>
            }
          />

          <Route
            path="/notifikasi"
            element={
              <Protected>
                <Notifikasi />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
