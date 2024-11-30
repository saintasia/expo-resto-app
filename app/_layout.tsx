import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Restaurants'}} />
      <Stack.Screen name="menu" options={{title: 'Menu'}}  />
    </Stack>
  )
}
