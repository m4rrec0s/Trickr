import { View, Text } from "react-native";

interface RoutineItemProps {
  title: string;
  color: string;
  tag: "Sugestão" | "Popular" | "Novo";
}

const RoutineItem = ({ color, title, tag }: RoutineItemProps) => {
  return (
    <View>
      <View className={`p-6 rounded-lg ${color} min-h-32 `}>
        <Text className="absolute top-5 px-3 py-1 bg-orange-400">{tag}</Text>
      </View>
        <Text className="text-lg font-semibold">{title}</Text>
    </View>
  );
};

export default RoutineItem;
