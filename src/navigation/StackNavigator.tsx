import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Splash from "../screens/splash";
import Login from "../screens/login";
import appRoutes from "./appRoutes";
import Attendancehistory from "../screens/attendancehistory";
import LeaveApproved from "../screens/leaveapproved";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={appRoutes.splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={appRoutes.splash} component={Splash} />
      <Stack.Screen name={appRoutes.login} component={Login} />
      <Stack.Screen name={appRoutes.attendance} component={Attendancehistory} />
      <Stack.Screen name={appRoutes.leaveApproved} component={LeaveApproved} />
    </Stack.Navigator>
  );
}
