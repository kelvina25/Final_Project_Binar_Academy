import React, { useEffect } from "react";
import WestIcon from "@mui/icons-material/West";
import { Col, Container, Row } from "react-bootstrap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./notifikasi.css";
import EllipseDanger from "../../assets/EllipseDanger.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "../../redux/actions/notif";

function Notifikasi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { notifs } = useSelector((state) => state.notif);

  useEffect(() => {
    dispatch(getNotif());
  }, [dispatch]);
  console.log(notifs);

  return (
    <>
      {/* Header */}
      <Container
        fluid
        className="notifikasi my-5 pb-3 "
        style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="mt-5 me-5" xs={8}>
            <h5>Notifikasi</h5>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center me-3 mt-3">
          <Col xs={8} className="pb-2">
            <div
              onClick={() => navigate("/")}
              className="d-flex align-items-center  p-2 ps-2"
              style={{
                background: "#A06ECE",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <WestIcon className="me-3" />
              Beranda
            </div>
          </Col>
        </Row>
      </Container>

      {/* body */}
      {notifs.length > 0 ? (
        <>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              {/* {notifs && */}
              {notifs.map((notif, index) => (
                <Col md={8} className="mb-3 mt-3" key={index}>
                  <div
                    style={{
                      boxShadow: "0px 1px rgb(206, 204, 204)",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <NotificationsIcon
                          style={{
                            color: "white",
                            background: "rgba(113, 38, 181, 0.5",
                            borderRadius: "20px",
                          }}
                        />
                        <p className="ms-3" style={{ color: "#8A8A8A" }}>
                          Pembayaran
                        </p>
                      </div>
                      <p style={{ color: "#8A8A8A" }}>
                        {notif.createdAt.slice(0, 3).join("/")}
                        <img
                          className="ms-2"
                          src={EllipseDanger}
                          alt="ellipseDanger"
                        />
                      </p>
                    </div>
                    <div className="ms-4">
                      <p
                        className="ms-3 text-justify"
                        style={{ fontWeight: "500" }}
                      >
                        {notif.message} {/* Data api belum data */}
                      </p>
                    </div>
                    <div className="ms-4">
                      <p className="ms-3" style={{ color: "#8A8A8A" }}></p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Notifikasi;
