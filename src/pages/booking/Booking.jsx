import React from "react";
import "./booking.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import BiodataForm from "../../components/biodata-form/BiodataForm";
import DetailCard from "../../components/detail-card/DetailCard";
import PaymentCard from "../../components/payment-card/PaymentCard";
import pic from "../../assets/booking-image/🦆 illustration _Cart shopping list_.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { payment, saveDataPenumpang } from "../../redux/actions/booking";
import BiodataCard from "../../components/biodataCard/BiodataCard";
import { toast } from "react-toastify";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isCheckout = location.pathname === "/booking/checkout";
  const isPayment = location.pathname === "/booking/payment";
  const isSuccess = location.pathname === "/booking/success";

  const { dataPenumpang, bookingCode, paymentId } = useSelector(
    (state) => state.booking
  );

  const onPayment = () => {
    if (paymentId === "") {
      toast.error("Pilih metode pembayaran terlebih dahulu!");
    }
    dispatch(payment(navigate));
  };

  return (
    <div className="booking">
      <div className="booking__header">
        <h2>Isi Data Diri</h2>
        <NavigateNextIcon color="disabled" />
        <h2
          style={{
            color: isCheckout || isPayment || isSuccess ? "#000000" : "#8A8A8A",
          }}
        >
          Bayar
        </h2>
        <NavigateNextIcon color="disabled" />
        <h2 style={{ color: isSuccess ? "#000000" : "#8A8A8A" }}>Selesai</h2>
      </div>

      <div className="booking__biodata">
        {/* slicing untuk pengisian data diri */}
        {!isCheckout && !isPayment && !isSuccess && (
          <>
            <div>
              <BiodataForm />
            </div>
            <div className="booking__biodata__detail">
              <h3>Detail Penerbangan</h3>
              <DetailCard />
            </div>
          </>
        )}

        {/* slicing untuk verifikasi data penumpang */}
        {!!isCheckout && (
          <>
            <div>
              <BiodataCard />
            </div>
            <div className="booking__biodata__detail">
              <h3>Detail Penerbangan</h3>
              <DetailCard />
              <button
                style={{ display: isCheckout ? "block" : "none" }}
                onClick={() =>
                  dispatch(saveDataPenumpang(dataPenumpang, navigate))
                }
              >
                Lanjut Bayar
              </button>
            </div>
          </>
        )}

        {/* slicing untuk mendapat booking code */}
        {!!isPayment && (
          <>
            <div className="data__pembayaran">
              <PaymentCard />
              <button className="btn__save" onClick={onPayment}>
                Bayar
              </button>
            </div>
            <div className="booking__code">
              <div className="booking__code__judul">
                <h3>Booking Code:</h3> <span>{bookingCode}</span>
              </div>
              <DetailCard />
            </div>
          </>
        )}
      </div>

      {/* slicing saat semua proses booking sukses */}
      {!!isSuccess && (
        <div className="booking__biodata__done">
          <img src={pic} alt="" />
          <p style={{ color: "#7126B5" }}>Selamat!</p>
          <p>Transaksi Pembayaran Tiket Sukses!</p>
          <div className="done__button">
            <button>Terbitkan Tiket</button>
            <button onClick={() => navigate("/")}>Cari Penerbangan Lain</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
