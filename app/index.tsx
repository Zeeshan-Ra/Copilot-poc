import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import {
  CopilotProvider,
  CopilotStep,
  useCopilot,
  walkthroughable,
} from "react-native-copilot";
import { Tooltip } from "./Tooltip";

const CopilotText = walkthroughable(Text);

export default function Index() {

  const router = useRouter()

  const { start, stop } = useCopilot();

  useEffect(() => {
    start()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CopilotStep name="step1" order={1} text="First step">
        <CopilotText>Edit app/index.tsx to edit this screen.</CopilotText>
      </CopilotStep>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <CopilotStep name="step2" order={2} text="Second step">
        <CopilotText>Edit app/index.tsx to edit this screen.</CopilotText>
      </CopilotStep>
      <CopilotStep name="step3" order={3} text="Third step">
        <CopilotText>Edit app/index.tsx to edit this screen.</CopilotText>
      </CopilotStep>

      <Button title="Go to Home" onPress={() => { router.push('/home') }} />
    </View>
  );
}