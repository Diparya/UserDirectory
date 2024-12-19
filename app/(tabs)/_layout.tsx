import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#007BFF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'User Directory' }} />
      <Stack.Screen
        name="user/[id]"
        options={({ route }) => ({
          //@ts-ignore
          title: `User ${route.params.id}`,
        })}
      />
    </Stack>
  );
}
