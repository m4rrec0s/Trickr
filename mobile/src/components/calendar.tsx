import { View, Text } from "react-native";

const Calendar = () => {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const currentDate = new Date();

  return (
    <View className="h-14 w-full flex">
      <Text className="text-lg text-bold">Hoje</Text>
      {daysOfWeek.map((day, index) => (
        <View key={index} className="flex justify-center rounded-lg bg-purple-600 p-2">
          <Text className="text-bold text-sm">
            {currentDate.getDate() + index}
          </Text>
          <Text className="text-zinc-500">{day}</Text>
        </View>
      ))}
    </View>
  );
};

export default Calendar;
