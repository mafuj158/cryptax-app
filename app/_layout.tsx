import "@/global.css";
import { Stack, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import CustomSplashScreen from "@/components/splash-screen";
import { useFonts } from 'expo-font';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'sf-pro-display-regular': require('@/assets/fonts/SFProDisplayRegular.ttf'),
    'sf-pro-display-medium': require('@/assets/fonts/SFProDisplayMedium.ttf'),
    'sf-pro-display-semibold': require('@/assets/fonts/SFProDisplaySemibold.ttf'),
    'sf-pro-display-bold': require('@/assets/fonts/SFProDisplayBold.ttf'),
    'sf-pro-display-extrabold': require('@/assets/fonts/SFProDisplayHeavy.ttf'),
    'sf-pro-display-light': require('@/assets/fonts/SFProDisplayLight.ttf'),
    'sf-pro-display-thin': require('@/assets/fonts/SFProDisplayThin.ttf'),
    'sf-pro-display-ultralight': require('@/assets/fonts/SFProDisplayUltralight.ttf'),
    'sf-pro-display-black': require('@/assets/fonts/SFProDisplayBlack.ttf'),
  })
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setSplashFinished(true);
    }
  }, [fontsLoaded]);


  if (!fontsLoaded || !splashFinished) {
    return <CustomSplashScreen onFinish={() => setSplashFinished(true)} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

