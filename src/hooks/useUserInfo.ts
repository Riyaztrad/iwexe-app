/**
 * @format
 */
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUserState } from "@/interfaces/auth.types";

function useUserInfo(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  return userInfo;
}

export default useUserInfo;
