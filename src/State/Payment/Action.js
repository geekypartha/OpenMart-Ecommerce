import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";

import axios from "axios";

export const createPayment = (orderId) => async (dispatch) => {
 dispatch({
   type: CREATE_PAYMENT_REQUEST,
 });

  try {

    const { data } = await api.post(
      `/api/payments/${orderId}`,
      {}
    );
    console.log("data", data);

    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload:error.message,
    });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
    console.log("update payment reqData ", reqData);
    dispatch({type: UPDATE_PAYMENT_REQUEST});

    try {
      
      const {data} = await api.get(
        `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,
     
      );
      console.log("updated data ---- ", data);
      dispatch({
        type: UPDATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
     
    }

};
