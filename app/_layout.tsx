import { Stack } from "expo-router";
import { CopilotProvider } from "react-native-copilot";
import { Tooltip } from "./Tooltip";

export default function RootLayout() {
  return (
    <CopilotProvider tooltipComponent={Tooltip}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
      </Stack>
    </CopilotProvider>
  );
}
