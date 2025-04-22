import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="index"
      options={{ title: "Home"}}
      />
      <Stack.Screen
      name="friendDetails/[friendId]"
      options={{ title: "Profile"}}
      />
      <Stack.Screen
      name="addFriend"
      options={{ title: "Add Friend"}}
      />
      
    </Stack>
  );
}
