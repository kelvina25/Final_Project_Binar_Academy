import axios from "axios";
import { toast } from "react-toastify";
import { setPassenger, setSchedule, setSearch } from "../reducers/search";

export const getAllSchedule =
  (navigate, departureTime, departureAirportId, arrivalAirportId, className) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule`
      );

      const { data } = response?.data;
      dispatch(setSchedule(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };

export const getSearchSchedule =
  (
    departureTime,
    departureAirportId,
    arrivalAirportId,
    className,
    passanger,
    navigate
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/schedule/search?departureTime=${departureTime}&departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&className=${className}`
      );

      const { data } = response?.data;

      dispatch(setSearch(data));

      dispatch(setPassenger(passanger));

      navigate("/search");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };
