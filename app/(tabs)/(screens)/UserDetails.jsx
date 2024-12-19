import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.subtitle}>Email: {user.email}</Text>
      <Text style={styles.subtitle}>Address:</Text>
      <Text style={styles.text}>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</Text>
      <Text style={styles.subtitle}>Company:</Text>
      <Text style={styles.text}>{user.company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  text: { fontSize: 16, color: 'gray' },
});

export default UserDetails;
