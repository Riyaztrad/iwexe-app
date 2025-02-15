import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface LeaveRequest {
  id: string;
  reason: string;
  startDate: string;
  endDate: string;
  approvedBy: string;
  status: "Approved" | "Pending" | "Rejected";
}

const LeaveRequestScreen = () => {
  const navigation = useNavigation();

  // Sample leave requests
  const leaveRequests: LeaveRequest[] = [
    {
      id: "1",
      reason: "Some Emergency",
      startDate: "March 25 - 1 - 2025",
      endDate: "March 25 - 1 - 2025",
      approvedBy: "Gunu Kolhe",
      status: "Approved",
    },
    {
      id: "2",
      reason: "Cousin's Marriage",
      startDate: "March 25 - 1 - 2025",
      endDate: "March 25 - 1 - 2025",
      approvedBy: "Gunu Kolhe",
      status: "Approved",
    },
    {
      id: "3",
      reason: "Daughters annual function",
      startDate: "March 25 - 1 - 2025",
      endDate: "March 25 - 1 - 2025",
      approvedBy: "Gunu Kolhe",
      status: "Approved",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}></TouchableOpacity>
        <Text style={styles.headerTitle}>Add Leave Request</Text>
      </View>

      {/* Leave Request Button (Aligned to Right) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("leaveRequest")}
        >
          <Text style={styles.addButtonText}>+ Leave Request</Text>
        </TouchableOpacity>
      </View>

      {/* Leave Request List */}
      <FlatList
        data={leaveRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Left Border */}
            <View style={styles.cardLeftBorder} />

            {/* Content */}
            <View style={styles.cardContent}>
              <Text style={styles.reasonText}>{item.reason}</Text>
              <Text style={styles.dateText}>{item.startDate}</Text>
              <Text style={styles.dateText}>{item.endDate}</Text>
              <Text style={styles.approvedByText}>
                <Text style={{ fontWeight: "bold", color: "green" }}>
                  Approved By:
                </Text>{" "}
                {item.approvedBy}
              </Text>
            </View>

            {/* Status (Top-Right Corner) */}
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E0DA",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#44235B",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#44235B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
    alignItems: "center",
    padding: 15,
    position: "relative", // Needed for absolute positioning of status
  },
  cardLeftBorder: {
    width: 5,
    backgroundColor: "teal",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
  },
  cardContent: {
    flex: 1,
    paddingLeft: 10,
  },
  reasonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
  },
  approvedByText: {
    fontSize: 14,
    color: "#444",
    marginTop: 5,
  },
  statusContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "teal",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  statusText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default LeaveRequestScreen;
