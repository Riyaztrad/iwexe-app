import React from "react";
import { sendOtpWhatsApp, verifyOtpWhatsApp } from "../services/auth.service";
import Toast from "react-native-toast-message";

function useAuthAction() {
  const trySendOtp = async (no: string) => {
    try {
      const response = await sendOtpWhatsApp(no);
      return response;
    } catch (ex) {
      console.log("ex", ex.message);
    }
  };

  const tryVerifyOtp = async (no: string, otp: string) => {
    try {
      const response = await verifyOtpWhatsApp(no, otp);
      console.log("response", response);
      return response;
    } catch (ex) {
      Toast.show({
        type: "error",
        text1: ex.message,
      });
      console.log("ex", ex.message);
    }
  };
  return { trySendOtp, tryVerifyOtp };
}

export default useAuthAction;
