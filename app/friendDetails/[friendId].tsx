import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { friends } from "../../friendsdata";

export default function FriendDetails() {
  const { friendId } = useLocalSearchParams(); 

  const friend = friends.find((f) => f.id === Number(friendId));

  if (!friend) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Friend not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{friend.name}'s Profile</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Nickname:</Text>
        <Text style={styles.value}>{friend.nickname}</Text>

        <Text style={styles.label}>Birthdate:</Text>
        <Text style={styles.value}>{friend.birthdate}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{friend.phone}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{friend.email}</Text>

        <Text style={styles.label}>Hobbies:</Text>
        <Text style={styles.value}>{friend.hobbies}</Text>

        <Text style={styles.label}>Pet:</Text>
        <Text style={styles.value}>{friend.pet}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});