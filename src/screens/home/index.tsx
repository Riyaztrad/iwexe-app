import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/Feather"; 
import LeaveIcon from "../../assets/Images/leave.svg";
import PayrollIcon from "../../assets/Images/payroll.svg";
import SalaryIcon from "../../assets/Images/salary.svg";
import ApprovalsIcon from "../../assets/Images/approvals.svg";
import EventIcon from "../../assets/Images/event.svg";
const HomeScreen = () => {
  const navigation = useNavigation();

  const backgroundImage = require("../../assets/Images/background.jpg");

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Gunwant Kolhe</Text>
          <Text style={styles.dateText}>Wed, Feb 5 at 1:33 pm</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            {/* <Icon name="bell" size={24} color="white" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            {/* <Icon name="settings" size={24} color="white" /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("attendance")}
        >
          <Text style={styles.menuText}>Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("leave")}
        >
          <LeaveIcon width={40} height={40} />
          <Text style={styles.menuText}>Leave</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Payroll")}
        >
          <PayrollIcon width={40} height={40} />
          <Text style={styles.menuText}>Payroll</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("SalaryDetails")}
        >
          <SalaryIcon width={40} height={40} />
          <Text style={styles.menuText}>Salary Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Approvals")}
        >
          <ApprovalsIcon width={40} height={40} />
          <Text style={styles.menuText}>Approvals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Event")}
        >
          <EventIcon width={40} height={40} />
          <Text style={styles.menuText}>Event</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>

  );
};

// Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the screen
  },
  container: {
    flex: 1,
    // backgroundColor: "#F4F4F4",
    padding: 15,
  },
  header: {
    // backgroundColor: "#44235B",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",

  },
  dateText: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  gridContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: "white",
    width: "48%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
    opacity:0.9
  },
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
});

export default HomeScreen;
