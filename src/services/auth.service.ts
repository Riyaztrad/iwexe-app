import { API_URLS } from "./core";
import client from "./core/ApiClient";

export async function sendOtpWhatsApp(no: string): Promise<any> {
  return client.post(`${API_URLS.SED_OTP}?mobileNo=${no}`);
}

export async function verifyOtpWhatsApp(no: string, otp: string): Promise<any> {
  return client.post(`${API_URLS.VERIFY_OTP}?mobile=${no}&otp=${otp}`);
}
