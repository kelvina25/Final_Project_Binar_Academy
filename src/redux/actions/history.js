import axios from "axios";
import { toast } from "react-toastify";
import { setHistory } from "../reducers/history";

const baseUrl = process.env.REACT_APP_AUTH_AirTicket;

//https://be-airticket-a6bnbhk5xa-as.a.run.app/api/payment/history/{userId}

export const getHistory = () => async (dispatch, getState) => {
  try {
    const { token, userId } = getState().auth;
    const response = await axios.get(`${baseUrl}/api/payment/history/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response?.data;
    dispatch(setHistory(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message || error?.message);
      return;
    }
    toast.error(error?.message);
  }
};