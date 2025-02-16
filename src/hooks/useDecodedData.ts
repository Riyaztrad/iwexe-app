/**
 * @format
 */
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { IUserState } from "@/interfaces/auth.types";

export interface IDecodedData {
  id: string;
  Email: string;
  RoleId: string;
  FullName: string;
  RoleName: string;
  ConnectionId: string;
  CompanyId: string;
  CompanyName: string;
  IsEmail: string;
  IsSms: string;
  ShortToKen: string;
  TimeZoneId: string;
  nameid: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}

function useDecodedData(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  const { token } = userInfo;
  const decoded = token ? jwtDecode(token) : null;

  return decoded;
}

export default useDecodedData;
