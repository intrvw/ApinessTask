import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Root } from "native-base";
import React, { useEffect } from "react";
import Navigations from "./src/Navigators/Navigations";
import { Provider } from 'react-redux';
import configureStore from "./src/Redux/Configure/ConfigureStore"
const store = configureStore();

export default function App() {
  let [fontsloaded] = useFonts({
    "Avenir-Medium": require("./Fonts/Avenir-Medium.ttf"),
    "Avenir-Roman": require("./Fonts/Avenir-Roman.otf"),
    "Avenir-Heavy": require("./Fonts/AEH.ttf"),
    Roboto_medium: require("./Fonts/Roboto-Medium.ttf"),
    "Avenir-Black": require("./Fonts/Avenir-Black.otf"),
  });
  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store} >
    <Root>
      <Navigations />
    </Root>
    </Provider>
  );
}
