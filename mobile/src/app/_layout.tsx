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
import Menu from "@/components/menu";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-slate-200">
      <Slot />
      <View className="absolute bottom-0 w-full shadow-2xl border-t border-gray-200">
        <Menu />
      </View>
    </View>
  );
};

export default Layout;