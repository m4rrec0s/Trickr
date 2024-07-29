import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { format, addDays, startOfWeek } from "date-fns";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarProps = {
  selectedDay: number;
  setSelectedDay: (day: number) => void;
};

const Calendar = ({ selectedDay, setSelectedDay }: CalendarProps) => {
  const startOfWeekDate = startOfWeek(new Date(), { weekStartsOn: 0 });

  const renderDays = () => {
    return daysOfWeek.map((day, index) => {
      const date = addDays(startOfWeekDate, index);
      const dayNumber = format(date, "d");
      const isSelected = index === selectedDay;

      return (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedDay(index)}
          style={{
            paddingBottom: 5,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          className={`flex flex-col items-center gap-1 rounded-md ${
            isSelected ? "bg-purple-600 text-white" : "bg-purple-300 text-black"
          }`}
        >
          <Text className="text-xs">{day}</Text>
          <Text className="text-lg font-semibold">{dayNumber}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View>
      <View className="flex items-center gap-3">
        <View className="max-w-md mx-auto">
          <Text className="text-center text-lg font-semibold mb-4">Hoje</Text>
          <View className="flex-row gap-3 pb-2">{renderDays()}</View>
        </View>
      </View>
    </View>
  );
};

export default Calendar;