import { View, Text } from "react-native";

const Banner = () => {
  return (
    <View className="w-full h-40 rounded-xl bg-green-900">
      <View className="absolute top-4 left-5">
        <Text className="text-gray-200 text-sm">1-on-1</Text>
        <Text className="text-white font-semibold">Terapia profissional</Text>
      </View>
    </View>
  );
};

export default Banner;
