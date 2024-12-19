import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#007BFF" style={styles.loader} />
    );
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
      <Text style={styles.text}>
        {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
      </Text>
      <Text style={styles.subtitle}>Company:</Text>
      <Text style={styles.text}>{user.company.name}</Text>
      <Text onPress={() => router.back()} style={styles.backButton}>
        Go Back
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { fontSize: 18, color: 'red', textAlign: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#555', marginTop: 15 },
  text: { fontSize: 16, color: '#666', lineHeight: 22 },
  backButton: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
