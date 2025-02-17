import { BASE_URL } from "../../config/config";

export const API_URLS = {
  SED_OTP: `${BASE_URL}/send-otp-whatsapp`,
  VERIFY_OTP: `${BASE_URL}/verify-otp-whatsapp`,
  GET_ATTENDANCE: `${BASE_URL}/attendance/getAttendance`,
  GET_APPROVED_ATTENDANCE: `${BASE_URL}/attendance/getAttendance`,
};
