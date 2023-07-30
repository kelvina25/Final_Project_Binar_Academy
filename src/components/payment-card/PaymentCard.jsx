import React, { useState } from "react";
import "./paymentCard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import gopay from "../../assets/booking-image/Logo GoPay (PNG-240p) - FileVector69.png";
import bca from "../../assets/booking-image/BCA Mobile App Logo PNG Vector (EPS) Free Download.png";
import mandiri from "../../assets/booking-image/lambang livin by mandiri.png";
import bri from "../../assets/booking-image/Logo_baru_BRImo.png";
import mastercard from "../../assets/booking-image/mastercard logo.png";
import visa from "../../assets/booking-image/visa logo.png";
import amex from "../../assets/booking-image/amex logo.png";
import paypal from "../../assets/booking-image/paypal logo.png";
import { useDispatch } from "react-redux";
import { setPaymentId } from "../../redux/reducers/booking";

const PaymentCard = () => {
  const [isGopay, setIsGopay] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);
  const [isCredit, setIsCredit] = useState(false);

  const dispatch = useDispatch();

  const onGopay = () => {
    setIsGopay(!isGopay);
    setIsVirtual(false);
    setIsCredit(false);
    dispatch(setPaymentId("1"));
  };

  const onVirtualAccount = () => {
    setIsVirtual(!isVirtual);
    setIsGopay(false);
    setIsCredit(false);
    dispatch(setPaymentId("2"));
  };

  const onCreditCard = () => {
    setIsCredit(!isCredit);
    setIsGopay(false);
    setIsVirtual(false);
    dispatch(setPaymentId("3"));
  };

  return (
    <div className="payment">
      <h2>Isi Data Pembayaran</h2>
      <div className="list__pembayaran">
        {/* gopay */}
        <div className="gopay" onClick={onGopay}>
          <p>Gopay</p>
          {isGopay ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="gopay__detail"
          style={{ display: isGopay ? "block" : "none" }}
        >
          <img src={gopay} alt="" />
          <p>Anda akan diarahkan ke GoPay untuk menyelesaikan pembelian.</p>
        </div>

        {/* virtual account */}
        <div className="virtual__account" onClick={onVirtualAccount}>
          <p>Virtual Account</p>
          {isVirtual ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="virtual__account__detail"
          style={{ display: isVirtual ? "block" : "none" }}
        >
          <div className="virtual__account__logo">
            <img src={bca} alt="" />
            <img src={mandiri} alt="" />
            <img src={bri} alt="" />
          </div>
          <p>
            Anda dapat membayar melalui BCA mBanking, Livin' by Mandiri, atau
            BRImo
          </p>
        </div>

        {/* credit card */}
        <div className="credit__card" onClick={onCreditCard}>
          <p>Credit Card</p>
          {isCredit ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="credit__card__detail"
          style={{ display: isCredit ? "block" : "none" }}
        >
          <div className="credit__card__logo">
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={amex} alt="" />
            <img src={paypal} alt="" />
          </div>
          <div className="credit__card__input">
            <p>Card Number</p>
            <input type="text" placeholder="4480 0000 0000 0000" />
            <p>Card Holder Name</p>
            <input type="text" placeholder="John Doe" />
            <div className="credit__card__date">
              <div className="credit__card__input">
                <p>CVV</p>
                <input type="text" placeholder="000" />
              </div>
              <div className="credit__card__input">
                <p>Expiry Date</p>
                <input type="text" placeholder="07/24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
