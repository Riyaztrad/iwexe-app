import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Splash from "../screens/splash";
import Login from "../screens/login";
import appRoutes from "./appRoutes";
import Home from "../screens/home";
import LeaveRequest from "../screens/leave";
import Leave from "../screens/leaveRequest";
import Attendance from "../screens/attendance";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={appRoutes.splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={appRoutes.splash} component={Splash} />
      <Stack.Screen name={appRoutes.login} component={Login} />
      <Stack.Screen name={appRoutes.home} component={Home} />
      <Stack.Screen name={appRoutes.leaveRequest} component={LeaveRequest} />
      <Stack.Screen name={appRoutes.leave} component={Leave} />
      <Stack.Screen name={appRoutes.attendance} component={Attendance} />
    </Stack.Navigator>
  );
}
