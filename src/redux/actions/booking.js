import axios from "axios";
import { toast } from "react-toastify";

import {
  setBookingCode,
  setDataPemesan,
  setDataPenumpang,
  setPaymentId,
  setScheduleId,
} from "../reducers/booking";

export const saveDataPenumpang =
  (dataPenumpang, navigate) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      let data = JSON.stringify(dataPenumpang);

      
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_AUTH_AirTicket}/api/tickets`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };
      const response = await axios.request(config);

      const code = response?.data?.data?.find((value) => value.bookingCode);
      

      dispatch(setBookingCode(code.bookingCode));
      dispatch(setDataPemesan(null));
      dispatch(setDataPenumpang([]));
      toast.success("Silahkan pilih metode pembayaran!");
      navigate("/booking/payment");

    } catch (error) {
      if (axios.isAxiosError(error)) {

        toast.error(error?.response?.data?.message || error?.message);
        return;
      }
      toast.error(error?.message);
    }
  };

export const saveDataPemesan = (pemesan, navigate) => async (dispatch) => {
  dispatch(setDataPemesan(pemesan));
  toast.success("Data Pemesan berhasil tersimpan!");
  navigate("/booking/penumpang");
};

export const payment = (navigate) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const { paymentId, bookingCode } = getState().booking;

    let data = JSON.stringify({
      paymentMethodId: `${paymentId}`,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_AUTH_AirTicket}/api/payment/book/${bookingCode}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    await axios.request(config);

    dispatch(setScheduleId(""));
    dispatch(setPaymentId(""));
    dispatch(setBookingCode(null));
    toast.success("Terima kasih atas pembayaran transaksi");
    navigate("/booking/success");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message || error?.message);
      return;
    }
    toast.error(error?.message);
  }
};
