import React, { useEffect, useState } from "react";
import "./resultItem.css";
import { KeyboardArrowDown, Luggage } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResultItem = ({ data }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState("");
  const [month2, setMonth2] = useState("");

  const [duration, setDuration] = useState(0);

  const [dateTimeInt, setDateTimeInt] = useState(0);
  const [dateTimeInt2, setDateTimeInt2] = useState(0);

  const [dipilih, setDipilih] = useState([]);

  const date = data?.departureTime.split(" ");
  const date2 = data?.arrivalTime.split(" ");

  const dateChange = date[0].split("-");
  const dateChange2 = date2[0].split("-");

  const dateTime = date[1].split(":");

  const dateTime2 = date2[1].split(":");

  const dateHour = dateTime[0] + ":" + dateTime[1];
  const dateHour2 = dateTime2[0] + ":" + dateTime2[1];

  const pilihSchedule = () => {
    navigate("/booking/pemesan");
  };

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

    setDipilih(() => data?.scheduleId);

    setDateTimeInt2(parseInt(dateTime2[0]));
    setDateTimeInt(parseInt(dateTime[0]));

    if (dateTimeInt2 <= dateTimeInt) {
      setDuration(dateTimeInt2 - dateTimeInt + 24);
    } else {
      setDuration(dateTimeInt2 - dateTimeInt);
    }
  });

  // console.log(dateHour);

  const dateFinal = dateChange[0] + "-" + month + "-" + dateChange[2];
  const dateFinal2 = dateChange2[0] + "-" + month2 + "-" + dateChange2[2];

  const priceConvert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(data?.kelas?.price);

  return (
    <>
      <div className={`${open ? "isOpen" : "resultItems"}`}>
        <div className="resultItem">
          <div className="resultItemPlane">
            <img src={data?.airline?.image} className="resultItemPlaneImage" />
            <p className="resultItemPlaneName">
              {data?.airline?.name} - {data?.kelas?.name}
            </p>
          </div>
          <KeyboardArrowDown
            fontSize="small"
            className="resultItemMore"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="resultItem">
          <div className="resultItemLeft">
            <div className="resultItemUp">
              <p className="resultItemUpDepartureJam">{dateHour}</p>
              <p className="resultItemUpDuration">{duration + "h 0m"}</p>
              <p className="resultItemUpArrivalJam">{dateHour2}</p>
            </div>
            <div className="resultItemUpDownLine"></div>
            <div className="resultItemDown">
              <p className="resultItemDownDepartureAirport">
                {data?.departureAirport?.code}
              </p>
              <p className="resultItemDownTransit">Direct</p>
              <p className="resultItemDownArrivalAirport">
                {data?.arrivalAirport?.code}
              </p>
            </div>
          </div>
          <div className="resultItemCenter">
            <Luggage className="resultItemCenterLogo" />
          </div>
          <div className="resultItemRight">
            <h2 className="resultItemRightPrice">IDR. {priceConvert}</h2>
            <button onClick={pilihSchedule}>Pilih</button>
          </div>
        </div>
        {open && (
          <div className="resultItemDetail">
            <div className="resultItemDetailLine1"></div>
            <div className="resultItemDetailItem">
              <h3 className="resultItemDetailTitle">Detail Penerbangan</h3>
              <div className="resultItemDetailDeparture">
                <div className="resultItemDetailDepartureLeft">
                  <p className="resultItemDetailDepartureJam">{dateHour}</p>
                  <p className="resultItemDetailDepartureTanggal">
                    {dateFinal}
                  </p>
                  <p className="resultItemDetailDepartureBandara">
                    {data?.departureAirport?.name}
                  </p>
                </div>
                <div className="resultItemDetailDepartureRight">
                  <p className="resultItemDetailDepartureTitle">
                    Keberangkatan
                  </p>
                </div>
              </div>
              <div className="resultItemDetailLine2">
                <div className="resultItemDetailLine2in"></div>
              </div>
              <div className="resultItemDetailPlane">
                <img
                  src={data?.airline?.image}
                  className="resultItemDetailPlaneLogo"
                />

                <div className="resultItemDetailPlanetext">
                  <p className="resultItemDetailPlaneName">
                    {data?.airline?.name} - {data?.kelas?.name}
                  </p>
                  <p className="resultItemDetailPlaneNumber">
                    {data?.airline?.iata}
                  </p>
                  <p className="resultItemDetailPlaneInformationTitle">
                    Informasi:
                  </p>
                  <p className="resultItemDetailPlaneInformationItem">
                    Baggage 20 kg
                  </p>
                  <p className="resultItemDetailPlaneInformationItem">
                    Cabin baggage 7 kg
                  </p>
                  <p className="resultItemDetailPlaneInformationItem">
                    In Flight Entertainment
                  </p>
                </div>
              </div>
              <div className="resultItemDetailLine2">
                <div className="resultItemDetailLine2in"></div>
              </div>
              <div className="resultItemDetailArrival">
                <div className="resultItemDetailArrivalLeft">
                  <p className="resultItemDetailArrivalJam">{dateHour2}</p>
                  <p className="resultItemDetailArrivalTanggal">{dateFinal2}</p>
                  <p className="resultItemDetailArrivalBandara">
                    {data?.arrivalAirport?.name}
                  </p>
                </div>
                <div className="resultItemDetailArrivalRight">
                  <p className="resultItemDetailArrivalTitle">Kedatangan</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResultItem;
