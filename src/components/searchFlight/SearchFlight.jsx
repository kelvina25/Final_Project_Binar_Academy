import React, { useEffect, useState } from "react";
import "./searchFlight.css";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { format } from "date-fns";
import { Calendar } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirport, getAllClass } from "../../redux/actions/home";

// import { getPostAirport } from "../../redux/actions/post";
import { FlightLand } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getSearchSchedule } from "../../redux/actions/search";
import { setPenumpang } from "../../redux/reducers/booking";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { toast } from "react-toastify";


const SearchFlight = () => {
  const [showSwitch, setshowSwitch] = useState(false);
  const [openPassenger, setopenPassenger] = useState(false);
  const [openSeatClass, setopenSeatClass] = useState(false);
  const [openDestinationFrom, setopenDestinationFrom] = useState(false);
  const [openDestinationTo, setopenDestinationTo] = useState(false);
  const [openDateDeparture, setopenDateDeparture] = useState(false);
  const [openDateReturn, setopenDateReturn] = useState(false);
  const [calenderDeparture, setCalenderDeparture] = useState("");
  const [calenderReturn, setCalenderReturn] = useState("");
  const [filterNameTo, setFilterNameTo] = useState("");
  const [filterNameFrom, setFilterNameFrom] = useState("");
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");

  const [seatClass, setSeatClass] = useState("");
  const [passenger, setPassenger] = useState({
    adult: 1,
    children: 0,
    baby: 0,
  });

  const [departureAirportId, setDepartureId] = useState();
  const [arrivalAirportId, setArrivalId] = useState();
  const [departureTime, setDepartureTime] = useState();
  const [className, setClassName] = useState("");

  // handle redux

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const airport = useSelector((state) => state.home.airport);
  const classes = useSelector((state) => state.home.class);

  const submitHandle = () => {
    if (
      departureTime == undefined &&
      departureAirportId == undefined &&
      arrivalAirportId == null
    ) {
      toast.error(`Lengkapi form pencarian terlebih dahulu!`);

    } else {
      const data = {
        departureTime,
        departureAirportId,
        arrivalAirportId,
        className,
        passenger,
      };
      dispatch(
        getSearchSchedule(
          departureTime,
          departureAirportId,
          arrivalAirportId,
          className,
          passenger,
          navigate
        )
      );
      const jumPenumpang = passenger.adult + passenger.children;
      dispatch(setPenumpang(jumPenumpang));
    }
  };

  useEffect(() => {
    dispatch(getAllAirport());
    dispatch(getAllClass());
  }, [dispatch]);
  const handleOption = (name, operation) => {
    setPassenger((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? passenger[name] + 1 : passenger[name] - 1,
      };
    });
  };

  const submitPassenger = (e) => {
    e.preventDefault();
    setopenPassenger(false);
  };

  const handleCalenderDeparture = (date) => {
    setDepartureTime(format(date, "yyyy/MM/dd").toString());
    setCalenderDeparture(format(date, "MM/dd/yyyy").toString());
    setopenDateDeparture(!openDateDeparture);
  };
  const handleCalenderReturn = (date) => {
    setCalenderReturn(format(date, "MM/dd/yyyy"));
    setopenDateReturn(!openDateReturn);
  };

  return (
    <>
      <div className="search_flight_container">
        <h6>
          Pilih Jadwal Penerbangan spesial di
          <span className="logo__name"> Tiketku!</span>
        </h6>
        <div className="destination">
          <div className="destination__from__to">
            <FlightTakeoffIcon className="icon" />
            <p>From</p>
            <span
              className="destination__from__to_input"
              onClick={() => setopenDestinationFrom(!openDestinationFrom)}
            >
              {destinationFrom}
            </span>
            {openDestinationFrom && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "#D0D0D0" }} />
                    <input
                      placeholder="Masukkan Kota atau Negara"
                      type="text"
                      value={departureAirportId}
                      onChange={(e) => setFilterNameFrom(e.target.value)}
                    />
                  </div>
                  <CloseIcon onClick={() => setopenDestinationFrom(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>
                {airport?.length > 0 &&
                  airport.map((e, i) => (
                    <div
                      className="latestSeachItem"
                      key={i}
                      onClick={() => {
                        setDestinationFrom(e?.code);
                        setDepartureId(e?.airportId);
                        setopenDestinationFrom(!openDestinationFrom);
                      }}
                    >
                      <p>{e?.cityName}</p>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="swap__destination">
            <SwapHorizIcon
              onClick={() => {
                setDestinationFrom(destinationTo);
                setDestinationTo(destinationFrom);
              }}
            />
            {/* <SwapHorizIcon /> */}
          </div>

          <div className="destination__from__to">
            <FlightLand className="icon" />
            <p>To</p>
            <span
              className="destination__from__to_input"
              onClick={() => setopenDestinationTo(!openDestinationTo)}
            >
              {destinationTo}
            </span>
            {openDestinationTo && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "D0D0D0" }} />
                    <input
                      placeholder="Masukkan Kota atau Negara"
                      type="text"
                      value={arrivalAirportId}
                      onChange={(e) => setFilterNameTo(e.target.value)}
                    />
                  </div>
                  <CloseIcon onClick={() => setopenDestinationTo(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>
                {airport?.length > 0 &&
                  airport.map((e, i) => (
                    <div
                      className="latestSeachItem"
                      onClick={() => {
                        setDestinationTo(e?.code);
                        setArrivalId(e?.airportId);
                        setopenDestinationTo(!openDestinationTo);
                      }}
                      key={i}
                    >
                      <p>{e?.cityName}</p>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="date_and_passenger">
          <div className="date_container">
            <DateRangeIcon className="icon" />
            <p>Date</p>
            <div className="departure">
              <label>Departure</label>
              <span
                className="departure_input"
                onClick={() => setopenDateDeparture(!openDateDeparture)}
                value={calenderDeparture}
              >
                {calenderDeparture}
              </span>
              {openDateDeparture && (
                <div
                  components={["DateRangeCalendar"]}
                  className="date_options"
                >
                  <Calendar
                    onChange={handleCalenderDeparture}
                    date={new Date()}
                    className="CalendarElement"
                    color="#7126B5"
                    disabledDays={{ before: new Date() }}
                  />
                </div>
              )}
            </div>
            {showSwitch ? (
              <div className="return">
                <label>Return</label>
                <span
                  className="return_input"
                  onClick={() => setopenDateReturn(!openDateReturn)}
                  value={calenderReturn}
                >
                  {calenderReturn}
                </span>
                {openDateReturn && (
                  <div
                    components={["DateRangeCalendar"]}
                    className="date_options"
                  >
                    <Calendar
                      onChange={handleCalenderReturn}
                      className="CalendarElement"
                      date={new Date(calenderDeparture)}
                      minDate={new Date(calenderDeparture)}
                      color="#7126B5"
                      disabledDays={{ before: new Date(calenderDeparture) }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="returnNotOpen"></div>
            )}
          </div>

          <div className="passenger_container">
            <AirlineSeatReclineNormalIcon className="icon" />
            <p>To</p>
            <div className="passenger">
              <label>Passengers</label>
              <span
                className="passenger_input"
                onClick={() => setopenPassenger(!openPassenger)}
              >
                {`${passenger.adult + passenger.children} Penumpang`}
              </span>

              {openPassenger && (
                <div className="passenger_options">
                  <CloseIcon onClick={() => setopenPassenger(false)} />
                  <hr />
                  <div className="optionItem">
                    <div className="optionText">
                      <ManIcon />
                      <div className="optionLabel">
                        <label>Dewasa</label>
                        <p>(Di bawah 2 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("adult", "decrease")}
                        disabled={passenger.adult <= 1}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.adult}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("adult", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />

                  <div className="optionItem">
                    <div className="optionText">
                      <GirlIcon />
                      <div className="optionLabel">
                        <label>Anak</label>
                        <p>(2 - 11 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("children", "decrease")}
                        disabled={passenger.children <= 0}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.children}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("children", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />

                  <div className="optionItem">
                    <div className="optionText">
                      <AccessibilityNewIcon />
                      <div className="optionLabel">
                        <label>Bayi</label>
                        <p>(Di bawah 2 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("baby", "decrease")}
                        disabled={passenger.baby <= 0}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.baby}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("baby", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="save_passenger">
                    <button onClick={submitPassenger}>Simpan</button>
                  </div>
                </div>
              )}
            </div>

            <div className="seat_class">
              <label>Seat Class</label>
              <span
                className="seat_class_input"
                onClick={() => setopenSeatClass(!openSeatClass)}
              >
                {seatClass}
              </span>

              {openSeatClass && (
                <div className="seatClass_options">
                  <CloseIcon onClick={() => setopenSeatClass(!openSeatClass)} />
                  <hr />
                  {classes?.map((e) => {
                    const priceConvert = new Intl.NumberFormat("id-ID", {
                      style: "decimal",
                      currency: "IDR",
                    }).format(e?.price);

                    return (
                      <>
                        <div
                          className="seat_optionItem"
                          // onChange={(e) => setClassName(e?.name)}
                          onClick={() => {
                            setSeatClass(e?.name);
                            setClassName(e?.name);
                            setopenSeatClass(!openSeatClass);
                          }}
                        >
                          <div className="seat_option_text">
                            <label>{e?.name}</label>
                            <p>IDR. {priceConvert}</p>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="search_button">
          <button onClick={submitHandle}>Cari Penerbangan</button>
        </div>
      </div>
    </>
  );
};

export default SearchFlight;
