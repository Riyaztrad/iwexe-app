import React, {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet , StatusBar} from "react-native";
import Icons from 'react-native-vector-icons/AntDesign'

function LeaveApproved(){

    const [leaveRequests, setLeaveRequests] = useState(
        Array(15).fill({
          title: "Sick leave Request",
          employeeName: "Gunwant Kolhe",
          fromDate: "21 March 2025",
          toDate: "25 March 2025",
          status: "Pending",
        })
      );
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#351f43"} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icons name="arrowleft" color="#fff" size={20} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Approve Leaves</Text>
        </View>

        {/* Leave Requests List */}
        <FlatList
          data={leaveRequests}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.employeeText}>{item.employeeName}</Text>
                <Text style={styles.dateText}>From: {item.fromDate}</Text>
                <Text style={styles.dateText}>To: {item.toDate}</Text>
              </View>
              <View style={styles.rightSection}>
                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        item.status === "Pending"
                          ? "#f59e0b"
                          : item.status === "Approved"
                          ? "#10b981"
                          : "#ef4444",
                    },
                  ]}
                >
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
                {item.status === "Pending" && (
                  <View style={styles.actions}>
                    <TouchableOpacity style={styles.iconButton}>
                      <Icons name="checkcircleo" size={18} color="#10b981" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                      <Icons name="closecircle" size={18} color="#ef4444" />
                    </TouchableOpacity>
                  </View>
                )}
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
    backgroundColor: "#351f43",
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderLeftColor: "#f59902",
    borderLeftWidth: 5,
  },
  leftBorder: {
    width: 5,
    height: "100%",
    backgroundColor: "#f59e0b",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    paddingLeft: 1,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  employeeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5b3a70",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  rightSection: {
    // alignItems: "flex-end",
  },
  statusBadge: {
    borderRadius: 15,
    paddingVertical: 2.5,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignContent:'center'
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent:'space-between'
  },
  iconButton: {
    // marginLeft: 10,
  },
});

export default LeaveApproved