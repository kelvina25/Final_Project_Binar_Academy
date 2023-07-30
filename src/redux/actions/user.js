import axios from "axios";
import { setFullName, setPhoneNumber, setEmail } from "../reducers/user";
import { toast } from "react-toastify";

export const updateProfile = (item) => async (dispatch) => {
  try {

    const response = await axios.put(
      `https://be-airticket-a6bnbhk5xa-as.a.run.app/api/user`, 
      {userId: item.userId,
      name: item.name,
      email: item.email,
      phoneNumber: item.phoneNumber},
      { "Content-Type": "application/json" } 
    );

     dispatch(setFullName(response.data.fullName));
     dispatch(setPhoneNumber(response.data.phoneNumber));
     dispatch(setEmail(response.data.email));

     toast.success("Profile is edited");

  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || error.message);
      return;
    }
    toast.error(error.message);
  }
};
