import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format, addDays, startOfWeek } from 'date-fns';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const startOfWeekDate = startOfWeek(new Date(), { weekStartsOn: 0 });

  const renderDays = () => {
    return daysOfWeek.map((day, index) => {
      const date = addDays(startOfWeekDate, index);
      const dayNumber = format(date, 'd');
      const isSelected = index === selectedDay;

      return (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedDay(index)}
          className={`flex flex-col items-center gap-1 rounded-md px-3 py-2 ${
            isSelected ? 'bg-purple-600 text-white' : 'bg-purple-300 text-black'
          }`}
        >
          <Text>{day}</Text>
          <Text>{dayNumber}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View className="flex-1">
      <View className="flex items-center bg-purple-200 gap-3 pt-16 p-5">
        <View className="max-w-md mx-auto">
          <Text className="text-center text-lg font-semibold mb-4">Hoje</Text>
          <View className="flex-row gap-3">{renderDays()}</View>
        </View>
      </View>
    </View>
  );
};

export default Calendar;