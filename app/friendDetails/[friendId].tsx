import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { friends } from "../../friendsData";

export default function FriendDetails() {
  const { friendId } = useLocalSearchParams(); 

  const friend = friends.find((f) => f.id === Number(friendId))!;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>{friend.name}'s Profile</Text>
        <View style={styles.imageContainer}>
          {friend.profilePicture ?
          (<Image
            source={friend.profilePicture}
            style={styles.profileImage}
          />) :
          (<Text style={styles.noProfilePicture}>No Profile Picture Provided</Text>)}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Nickname:</Text>
          <Text style={styles.value}>{friend.nickname || "N/A"}</Text>

          <Text style={styles.label}>Birthdate:</Text>
          <Text style={styles.value}>{friend.birthdate || "N/A"}</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{friend.phone || "N/A"}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{friend.email || "N/A"}</Text>

          <Text style={styles.label}>Hobbies:</Text>
          <Text style={styles.value}>{friend.hobbies || "N/A"}</Text>

          <Text style={styles.label}>Pet:</Text>
          <Text style={styles.value}>{friend.pet || "N/A"}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer:  {
    flexGrow: 1,
  },
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
  imageContainer: {
    alignItems: "center", 
    marginBottom: 20,
  },
  noProfilePicture: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  profileImage: {
    width: 150, 
    height: 150, 
    borderRadius: 75,  
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
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
});