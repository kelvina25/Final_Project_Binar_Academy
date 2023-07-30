import React from "react";
import "./biodataCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";

const BiodataCard = () => {
  const { dataPenumpang } = useSelector((state) => state.booking);
  return (
    <>
      {dataPenumpang.map((data, index) => {
        return (
          <div className="biodata__card" key={index}>
            <p className="judul">
              Data Diri Penumpang {index + 1}
              <CheckCircleIcon sx={{ color: "#73CA5C" }} />
            </p>
            <div className="list">
              <div className="list__input">
                <p>Title</p>
                <input type="text" placeholder={data.title} disabled />
              </div>
              <div className="list__input">
                <p>Nama Lengkap</p>
                <input type="text" placeholder={data.firstName} disabled />
              </div>
              <div
                className="list__input"
                style={{ display: data.lastName === "" ? "none" : "block" }}
              >
                <p>Nama Keluarga</p>
                <input type="text" placeholder={data.lastName} disabled />
              </div>
              <div className="list__input">
                <p>Tanggal Lahir</p>
                <input type="text" placeholder={data.birthDate} disabled />
              </div>
              <div className="list__input">
                <p>Kewarganegaraan</p>
                <input type="text" placeholder={data.nationality} disabled />
              </div>
              <div className="list__input">
                <p>KTP/Paspor</p>
                <input type="text" placeholder={data.idCardNumber} disabled />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BiodataCard;
