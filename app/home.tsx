import React, { useEffect } from 'react'
import { Text, View } from "react-native";
import {
    CopilotStep,
    useCopilot,
    walkthroughable,
} from "react-native-copilot";

const CopilotText = walkthroughable(Text);

export default function Home() {

    const { start } = useCopilot();

    useEffect(() => {
        start()
    }, [])

    return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <CopilotStep order={1} name='hello' text='this is hello'>
                    <CopilotText>Hello World</CopilotText>
                </CopilotStep>
                <CopilotStep order={2} name='hello2' text='this is hello2'>
                    <CopilotText>Hello World 2</CopilotText>
                </CopilotStep>
                <CopilotStep order={3} name='hello3' text='this is hello3'>
                    <CopilotText>Hello World 2</CopilotText>
                </CopilotStep>
                <CopilotStep order={4} name='hello4' text='this is hello4'>
                    <CopilotText>Hello World 2</CopilotText>
                </CopilotStep>
            </View>
    )
}