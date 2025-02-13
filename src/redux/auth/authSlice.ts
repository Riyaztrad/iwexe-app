import { createSlice } from '@reduxjs/toolkit';
// import {useAppDispatch} from '../store';

export interface AuthState {
  userInfo: any;
  token: string;
  loginStatus: boolean;
}

const initialState: AuthState = {
  userInfo: null,
  token: '',
  loginStatus: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, root) => {
      state.userInfo = root.payload;
      state.token = root.payload.token;
    },
    logout: state => {
      state.userInfo = null;
      state.token = '';
      state.loginStatus = false;
    },
    setIsLogin: (state, root) => {
      state.loginStatus = root.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, setIsLogin} = AuthSlice.actions;

// export const useLoginReduxActions = () => {
//   const dispatch = useAppDispatch();
//   return {
//     setCredentials: (payload: any) => dispatch(login(payload)),
//     setIsLogin: (payload: any) => dispatch(setIsLogin(payload)),
//     logout: () => dispatch(logout()),
//   };
// };

export default AuthSlice.reducer;