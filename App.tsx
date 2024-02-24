import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./navigator/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, useColorScheme, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const colorSchema = useColorScheme();
  const themeContainerStyle = colorSchema === "light" ? styles.lightContainer : styles.darkContainer;
  console.log(themeContainerStyle);
  const preLoad = async () => {
    const fontsTOLoad = [Ionicons.font];
    const fontPromises = fontsTOLoad.map((font: any) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo.png")];
    const imagePromises = imagesToLoad.map((image: any) => Asset.loadAsync(image));
    await Promise.all([...fontPromises, ...imagePromises]);
  };

  if (loading) {
    return <AppLoading onError={console.warn} onFinish={onFinish} startAsync={preLoad} />;
  }

  return (
    <ThemeProvider theme={themeContainerStyle}>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
});
