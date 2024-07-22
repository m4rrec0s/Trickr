import Calendar from "@/components/calendar";
import { View, Text } from "react-native";

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const currentDate = new Date();

const Home = () => {
  return (
    <View className="flex-1 px-5 pt-16">
      <Text className="text-lg text-bold">Hoje</Text>
      <View className="flex-row gap-3">
        {daysOfWeek.map((day, index) => (
          <View key={index} className="flex flex-col items-center justify-center rounded-lg bg-purple-400 h-14 w-12">
              <Text className="text-sm">{day}</Text>
              <Text className="text-bold text-lg">
                {currentDate.getDate() + index} 
              </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
