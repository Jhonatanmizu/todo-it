// Flow
import React from "react";
// Components
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBarHeight,
  },
});
