import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { addFriend } from "../friendsData";

export default function AddFriend() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [pet, setPet] = useState("");

  const handleSave = () => {
    if (
      !name ||
      !nickname ||
      !birthdate ||
      !phone ||
      !email ||
      !hobbies ||
      !pet
    ) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    addFriend({
      name,
      nickname,
      birthdate: birthdate.toISOString().split("T")[0],
      phone,
      email,
      hobbies,
      pet,
    });

    Alert.alert("Success", "Friend added successfully!");
    router.push("/");
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthdate(selectedDate);
    }
  };

  const formattedBirthdate = birthdate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Nickname" value={nickname} onChangeText={setNickname} />

      <View style={styles.labelContainer}>
        <Text style={styles.birthdateLabel}>Birthdate</Text>
      </View>
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text>{formattedBirthdate}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={birthdate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}

      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Hobbies (Separate each with a comma)" value={hobbies} onChangeText={setHobbies} />
      <TextInput style={styles.input} placeholder="Pet" value={pet} onChangeText={setPet} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  labelContainer: {
    marginBottom: 5,
    marginLeft: 2,
  },
  birthdateLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
