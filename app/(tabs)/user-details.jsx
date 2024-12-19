import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSearchParams } from 'expo-router';
import axios from 'axios';

const UserDetails = () => {
  const { id } = useSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Failed to load user details.</Text>
      </View>
    );
  }

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
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { fontSize: 18, color: 'red', textAlign: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  text: { fontSize: 16, color: 'gray' },
});

export default UserDetails;
