import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
import Calender from "react-native-vector-icons/Feather";
import appRoutes from "../../navigation/appRoutes";
import { useFetchAttendanceHistory } from "../../queries/useFetchAttendanceHistory";

function Attendancehistory() {
  const navigation = useNavigation();
  // const { data: history } = useFetchAttendanceHistory();
  const attendanceData = Array(15).fill({
    date: "March 12, 2023",
    time: "10:00 AM - 07:15 PM",
    status: "Submitted",
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#351f43"} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icons name="arrowleft" color="#fff" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Attendance</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.punchButton}
          onPress={() => {
            navigation.navigate(appRoutes.attendance, { data: "Punch-in" });
          }}
        >
          <Text style={styles.buttonText}>Punch-in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.punchButton}
          onPress={() => {
            navigation.navigate(appRoutes.attendance, { data: "Punch-out" });
          }}
        >
          <Text style={styles.buttonText}>Punch-out</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={attendanceData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.dateText}>
                <Calender name="calendar" color="#0b5ed7" size={15} />{" "}
                {item.date}
              </Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    paddingBottom: 15,
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#351f43",
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginVertical: 15,
  },
  punchButton: {
    backgroundColor: "#351f43",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",

    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 10,
    borderLeftColor: "#0752ad",
  },

  cardContent: {
    flex: 1,
    paddingLeft: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0b5ed7",
  },
  timeText: {
    fontSize: 12,
    color: "#333",
  },
  statusBadge: {
    backgroundColor: "#0752ad",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  statusText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Attendancehistory;
