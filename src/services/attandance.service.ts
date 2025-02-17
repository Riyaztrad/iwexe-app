import { API_URLS } from "./core";
import client from "./core/ApiClient";

export async function fetchAttendanceHistory(
  companyId: number,
  empId: number
): Promise<any> {
  return client.get(`${API_URLS.GET_ATTENDANCE}/${companyId}/${empId}`);
}

export async function fetchApprovedAttendance(
  companyId: number,
  empId: number
): Promise<any> {
  return client.get(
    `${API_URLS.GET_APPROVED_ATTENDANCE}/${companyId}/${empId}`
  );
}
