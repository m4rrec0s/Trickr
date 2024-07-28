import Banner from "@/components/banner";
import { View, Text, ScrollView } from "react-native";

const ProfilePage = () => {
  return (
    <View className="flex-1 pt-20 px-5 animate-fadeIn">
      <View className="pb-8">
        <Text className="text-2xl font-semibold mb-1">Perfil</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="w-full gap-3"
      >
        <View className="w-full">
          <Banner />
        </View>

        <View className="w-full gap-2 mt-4 pb-6">
          
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
