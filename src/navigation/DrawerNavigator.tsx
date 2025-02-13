import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MyTeam from "../screens/my-team";
import appRoutes from "./appRoutes";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={appRoutes.myTeam}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name={appRoutes.myTeam} component={MyTeam} />
    </Drawer.Navigator>
  );
}
