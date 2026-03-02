import { Stack } from 'expo-router';
import { ThemeProvider } from '../src/providers/ThemeProvider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'demo-mobile' }} />
      </Stack>
    </ThemeProvider>
  );
}
