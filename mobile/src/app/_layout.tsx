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
    <View className="flex-1 flex-col justify-between bg-gray-50">
      <View className="flex-1">
        <Slot />
      </View>
      <View className="w-full rounded-l-2xl rounded-r-2xl">
        <Menu />
      </View>
    </View>
  );
};

export default Layout;
