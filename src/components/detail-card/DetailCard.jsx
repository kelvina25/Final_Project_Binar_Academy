import React, { useEffect, useState } from "react";
import "./detailCard.css";
import airlineLogo from "../../assets/airline.png";
import { useSelector } from "react-redux";

const DetailCard = () => {
  const schedule = useSelector((state) => state.search.filter);
  const scheduleSelected = schedule[0];

  const totalPassanger = useSelector((state) => state.search.passenger);

  const [dateTimeInt, setDateTimeInt] = useState(0);
  const [dateTimeInt2, setDateTimeInt2] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [adultPrice, setAdultPrice] = useState(0);
  const [childrenPrice, setChildrenPrice] = useState(0);
  const [tax, setTax] = useState(0);

  const [month, setMonth] = useState("");
  const [month2, setMonth2] = useState("");

  const price = scheduleSelected?.kelas?.price;
  const adultNum = totalPassanger?.adult;
  const childrenNum = totalPassanger?.children;

  const date = scheduleSelected?.departureTime.split(" ");
  const date2 = scheduleSelected?.arrivalTime.split(" ");

  const dateChange = date[0].split("-");
  const dateChange2 = date2[0].split("-");

  const dateTime = date[1].split(":");

  const dateTime2 = date2[1].split(":");

  const dateHour = dateTime[0] + ":" + dateTime[1];
  const dateHour2 = dateTime2[0] + ":" + dateTime2[1];

  useEffect(() => {
    switch (dateChange[1]) {
      case "01":
        setMonth("Jan");
        break;
      case "02":
        setMonth("Feb");
        break;
      case "03":
        setMonth("Mar");
        break;
      case "04":
        setMonth("Apr");
        break;
      case "05":
        setMonth("May");
        break;
      case "06":
        setMonth("Jun");
        break;
      case "07":
        setMonth("Jul");
        break;
      case "08":
        setMonth("Aug");
        break;
      case "09":
        setMonth("Sep");
        break;
      case "10":
        setMonth("Oct");
        break;
      case "11":
        setMonth("Nov");
        break;
      case "12":
        setMonth("Des");
        break;
    }
    switch (dateChange2[1]) {
      case "01":
        setMonth2("Jan");
        break;
      case "02":
        setMonth2("Feb");
        break;
      case "03":
        setMonth2("Mar");
        break;
      case "04":
        setMonth2("Apr");
        break;
      case "05":
        setMonth2("May");
        break;
      case "06":
        setMonth2("Jun");
        break;
      case "07":
        setMonth2("Jul");
        break;
      case "08":
        setMonth2("Aug");
        break;
      case "09":
        setMonth2("Sep");
        break;
      case "10":
        setMonth2("Oct");
        break;
      case "11":
        setMonth2("Nov");
        break;
      case "12":
        setMonth2("Des");
        break;
    }

    setAdultPrice(price * adultNum);
    setChildrenPrice(price * childrenNum);

    setTax((adultPrice + childrenPrice) / 10);

    setTotalPrice(adultPrice + childrenPrice + tax);

    setDateTimeInt2(parseInt(dateTime2[0]));
    setDateTimeInt(parseInt(dateTime[0]));
  });

  const adultPriceConvert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(adultPrice);

  const childrenPriceConvert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(childrenPrice);

  const totalPriceConvert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(totalPrice);

  const taxPriceConvert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(tax);

  const dateFinal = dateChange[0] + "-" + month + "-" + dateChange[2];
  const dateFinal2 = dateChange2[0] + "-" + month2 + "-" + dateChange2[2];

  return (
    <div>
      <div className="detail__date">
        <div className="date">
          <p>{dateHour}</p>
          <span>{dateFinal}</span>
        </div>
        <div className="status">
          <p>keberangkatan</p>
        </div>
      </div>
      <p className="nama__terminal">
        {scheduleSelected?.departureAirport?.name}
      </p>
      <div className="line"></div>
      <div className="detail__pesawat">
        <img src={scheduleSelected?.airline?.image} alt="" />
        <div>
          <dl type="none" className="kategori__pesawat">
            <dt>
              {scheduleSelected?.airline?.name} -{" "}
              {scheduleSelected?.kelas?.name}
            </dt>
            <dt>{scheduleSelected?.airline?.iata}</dt>
          </dl>
          <p className="pType">Informasi:</p>
          <dl type="none" className="informasi__pesawat">
            <dt>Baggage 20 kg</dt>
            <dt>Cabin baggage 7 kg</dt>
            <dt>In Flight Entertainment</dt>
          </dl>
        </div>
      </div>
      <div className="line"></div>
      <div className="detail__date">
        <div className="date">
          <p>{dateHour2}</p>
          <span>{dateFinal2}</span>
        </div>
        <div className="status">
          <p>kescheduleSelectedngan</p>
        </div>
      </div>
      <p className="nama__terminal">{scheduleSelected?.arrivalAirport?.name}</p>
      <div className="line"></div>
      <div className="detail__price">
        <p className="pType">Rincian Harga:</p>
        <div className="rincian__harga">
          <dl type="none" className="keterangan">
            <dt>{totalPassanger?.adult} Adult</dt>
            <dt>{totalPassanger?.children} Children</dt>
            <dt>Tax</dt>
          </dl>
          <dl type="none" className="harga">
            <dt>IDR. {adultPriceConvert}</dt>
            <dt>IDR. {childrenPriceConvert}</dt>
            <dt>IDR. {taxPriceConvert}</dt>
          </dl>
        </div>
      </div>
      <div className="line"></div>
      <div className="total__harga">
        <p className="pType">Total:</p>
        <span>IDR {totalPriceConvert}</span>
      </div>
    </div>
  );
};

export default DetailCard;
