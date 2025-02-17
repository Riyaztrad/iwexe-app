/**
 * @format
 */
import { useQuery } from "react-query";
import { QueryKeys } from "../config/config";
import { fetchAttendanceHistory } from "../services/attandance.service";

async function getAttendanceHistory(
  companyId: number,
  empId: number
): Promise<any> {
  try {
    const response: any = await fetchAttendanceHistory(companyId, empId);
    return response;
  } catch (error: any) {
    return Promise.reject({
      message: error.message,
      data: [],
      statusCode: 500,
    });
  }
}

const useFetchAttendanceHistory = (
  companyId: number,
  empId: number,
  enabled = true
) => {
  const cacheKey = [QueryKeys.attendanceHistory, empId];
  return useQuery(
    cacheKey,
    () => {
      return getAttendanceHistory(companyId, empId);
    },
    {
      enabled,
    }
  );
};

export { useFetchAttendanceHistory };
