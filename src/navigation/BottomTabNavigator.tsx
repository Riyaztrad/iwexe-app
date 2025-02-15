import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CallLogs from "../screens/call-logs";
import Home from "../screens/home";
import Leads from "../screens/leads";
import appRoutes from "./appRoutes";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={appRoutes.home}
    >
      <Tab.Screen name={appRoutes.home} component={Home} />
      <Tab.Screen name={appRoutes.leads} component={Leads} />
      <Tab.Screen name={appRoutes.callLogs} component={CallLogs} />
    </Tab.Navigator>
  );
}
