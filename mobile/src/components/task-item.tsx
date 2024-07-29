import { View, Text } from "react-native";

interface TaskItemProps {
  props: {
    title: string;
    description: string;
    time: string;
    isCompleted: boolean;
  };
}

const TaskItem = ({
  props
}: TaskItemProps) => {
  return (
    <View className="w-full py-6 px-5 bg-white rounded-2xl shadow-sm mb-3">
      <Text className="text-sm text-gray-400">{props.time}</Text>
      <Text className="text-xl font-semibold">{props.title}</Text>
      <Text className="text-sm">{props.description}</Text>
      <Text className="text-sm">{props.isCompleted ? "Concluída" : "Pendente"}</Text>
    </View>
  );
};

export default TaskItem;
