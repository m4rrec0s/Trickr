import "@/styles/global.css";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { View } from "react-native";
import { Slot } from "expo-router";
import Loading from "@/components/loading";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-slate-200">
      <Slot />
    </View>
  );
};

export default Layout;