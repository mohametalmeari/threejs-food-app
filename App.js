import { Canvas } from "@react-three/fiber/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { BottomUI } from "./components/BottomUI";
import { Sandwich } from "./components/Sandwich";
import { Suspense } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />
        <Suspense>
          <Sandwich />
        </Suspense>
      </Canvas>
      <BottomUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
