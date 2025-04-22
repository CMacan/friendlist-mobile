export type Friend = {
  id: number;
  name: string;
  nickname: string;
  birthdate: string;
  phone: string;
  email: string;
  hobbies: string;
  pet: string;
  profilePicture?: any; 
};

export const friends: Friend[] = [];

export function addFriend(newFriend: Omit<Friend, 'id'>) {
  const newId = friends.length > 0 ? friends[friends.length - 1].id + 1 : 1;
  friends.push({ id: newId, ...newFriend });
}

export function deleteFriend(friendId: number) {
  const index = friends.findIndex((friend) => friend.id === friendId);
  if (index !== -1) {
    friends.splice(index, 1);
  }
}
