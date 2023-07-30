import axios from "axios";
import { setAirport, setClass, setDestinationFav } from "../reducers/home";
import { toast } from "react-toastify";

export const getAllAirport = (navigate) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/airport`
    );

    const { data } = response?.data;
    dispatch(setAirport(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const getAllClass = (navigate) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/class`
    );

    const { data } = response?.data;

    dispatch(setClass(data));
  } catch (error) {

    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getAllDestinationFav =
  (navigate) => async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule/random`
      );

      const { data } = response?.data;
      dispatch(setDestinationFav(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };
