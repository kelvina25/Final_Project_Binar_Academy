import React, { useState } from "react";
import "./biodataForm.css";
import { Autocomplete, Switch, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataPenumpang } from "../../redux/reducers/booking";
import { toast } from "react-toastify";
import { saveDataPemesan } from "../../redux/actions/booking";

const BiodataForm = () => {
  const listTitle = ["Mr.", "Mrs.", "Ms.", "Miss"];

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();
  const isPenumpang = location.pathname === "/booking/penumpang";

  const scheduleSearch = useSelector((state) => state.search.filter);
  const scheduleSelected = scheduleSearch[0];

  // hook usestate untuk switch nama keluarga
  const [checkedPemesan, setCheckedPemesan] = useState(false);
  const [checkedPenumpang, setCheckedPenumpang] = useState(false);

  // hook usestate untuk data pemesan
  const [namaPemesan, setNamaPemesan] = useState("");
  const [lastNamePemesan, setLastNamePemesan] = useState("");
  const [teleponPemesan, setTeleponPemesan] = useState("");
  const [emailPemesan, setEmailPemesan] = useState("");

  // hook usestate untuk data penumpang
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [berlaku, setBerlaku] = useState("");
  const [scheduleId, setScheduleId] = useState(scheduleSelected?.scheduleId);

  console.log(scheduleId);

  const [index, setIndex] = useState(0);

  const { dataPenumpang, penumpang } = useSelector((state) => state.booking);
  const { userId } = useSelector((state) => state.auth);

  const onPemesan = (e) => {
    e.preventDefault();
    if (namaPemesan === "" || teleponPemesan === "" || emailPemesan === "") {
      toast.error("Lengkapi Form Data Diri Pemesan!");
    } else {
      const pemesan = {
        namaPemesan,
        lastNamePemesan,
        teleponPemesan,
        emailPemesan,
      };
      dispatch(saveDataPemesan(pemesan, navigate));
    }
  };

  const onPenumpang = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      firstName === "" ||
      birthDate === "" ||
      nationality === "" ||
      idCardNumber === "" ||
      penerbit === "" ||
      berlaku === ""
    ) {
      toast.error(`Lengkapi Form Data Diri Penumpang ${index + 1}!`);
    } else {
      const data = {
        title,
        firstName,
        lastName,
        birthDate,
        nationality,
        idCardNumber,
        scheduleId,
        userId,
      };
      dispatch(setDataPenumpang([...dataPenumpang, data]));
      toast.success(`Data Penumpang ${index + 1} berhasil tersimpan!`);
      setIndex(index + 1);

      if (index === penumpang - 1) {
        navigate("/booking/checkout");
      } else {
        setCheckedPenumpang(false);
        setTitle("");
        setFirstName("");
        setLastName("");
        setBirthDate("");
        setNationality("");
        setIdCardNumber("");
        setPenerbit("");
        setBerlaku("");
      }
    }
  };

  return (
    <>
      <div className="biodata__form">
        {/* slicing untuk biodata form pemesan */}
        {!isPenumpang && (
          <div className="booking__biodata__form__pemesan">
            <h2>Isi Data Pemesan</h2>
            <form className="booking__biodata__form__pemesan__input">
              <p className="judul">Data Diri Pemesan</p>
              <div className="list">
                <div className="list__input">
                  <p>Nama Lengkap</p>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={namaPemesan}
                    onChange={(e) => setNamaPemesan(e.target.value)}
                  />
                </div>
                <div className="list__switch">
                  <p>Punya Nama Keluarga?</p>
                  <Switch
                    color="secondary"
                    checked={checkedPemesan}
                    onChange={(e) => setCheckedPemesan(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div
                  className="list__input"
                  style={{ display: checkedPemesan ? "block" : "none" }}
                >
                  <p>Nama Keluarga</p>
                  <input
                    type="text"
                    placeholder="Nama Keluarga"
                    value={lastNamePemesan}
                    onChange={(e) => setLastNamePemesan(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Nomor Telepon</p>
                  <input
                    type="text"
                    placeholder="Nomor Telepon"
                    value={teleponPemesan}
                    onChange={(e) => setTeleponPemesan(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="Contoh: johndoe@gmail.com"
                    value={emailPemesan}
                    onChange={(e) => setEmailPemesan(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <button type="submit" className="btn__save" onClick={onPemesan}>
              Simpan
            </button>
          </div>
        )}

        {/* slicing untuk biodata form penumpang */}
        {!!isPenumpang && (
          <div className="booking__biodata__form__penumpang">
            <h2>Isi Data Penumpang</h2>
            <form className="booking__biodata__form__penumpang__input">
              <p className="judul">Data Diri Penumpang {index + 1}</p>
              <div className="list">
                <div className="list__title">
                  <p>Title</p>
                  <Autocomplete
                    size="small"
                    id="controllable-states-demo"
                    inputValue={title}
                    onInputChange={(event, newInputValue) =>
                      setTitle(newInputValue)
                    }
                    options={listTitle}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Title" />
                    )}
                  />
                </div>
                <div className="list__input">
                  <p>Nama Lengkap</p>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="list__switch">
                  <p>Punya Nama Keluarga?</p>
                  <Switch
                    color="secondary"
                    checked={checkedPenumpang}
                    onChange={(e) => setCheckedPenumpang(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div
                  className="list__input"
                  style={{ display: checkedPenumpang ? "block" : "none" }}
                >
                  <p>Nama Keluarga</p>
                  <input
                    type="text"
                    placeholder="Nama Keluarga"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Tanggal Lahir</p>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Kewarganegaraan</p>
                  <input
                    type="text"
                    placeholder="Kewarganegaraan"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>KTP/Paspor</p>
                  <input
                    type="text"
                    placeholder="KTP/Paspor"
                    value={idCardNumber}
                    onChange={(e) => setIdCardNumber(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Negara Penerbit</p>
                  <input
                    type="text"
                    placeholder="Negara Penerbit"
                    value={penerbit}
                    onChange={(e) => setPenerbit(e.target.value)}
                  />
                </div>
                <div className="list__input">
                  <p>Berlaku Sampai</p>
                  <input
                    type="date"
                    value={berlaku}
                    onChange={(e) => setBerlaku(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <button type="submit" className="btn__save" onClick={onPenumpang}>
              Simpan
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BiodataForm;
