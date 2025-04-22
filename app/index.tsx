import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { friends as initialFriends, deleteFriend } from "../friendsData"; 
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [friendList, setFriendList] = useState(initialFriends); // manage state

  const handlePress = (friend: any) => {
    Alert.alert(
      "Confirm", 
      `Proceed to ${friend.name}'s profile?`, 
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Proceed", 
          onPress: () => router.push(`/friendDetails/${friend.id}`)
        }
      ]
    );
  };

  const handleDelete = (friendId: number) => {
    Alert.alert(
      "Delete Friend",
      "Are you sure you want to delete this friend?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteFriend(friendId); // Still update the module data if needed
            setFriendList((prev) => prev.filter((f) => f.id !== friendId)); // Update state
            Alert.alert("Deleted", "Friend has been deleted.");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={friendList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Text style={styles.name}>
                {index + 1}. {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => router.push("/addFriend")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  item: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
  },
});