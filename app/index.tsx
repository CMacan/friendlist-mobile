import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { friends } from "../friendsData";

export default function Index() {
  const router = useRouter();

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

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.name}>
              {index + 1}. {item.name}
            </Text>
          </TouchableOpacity>
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
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
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
    fontWeight: 500,
  },
});