import AddTaskButton from "@/components/add-task-button";
import Calendar from "@/components/calendar";
import Menu from "@/components/menu";
import TaskItem from "@/components/task-item";
import { ScrollView, View } from "react-native";

const Home = () => {
  const tasks = [
    {
      title: "Comprar pão",
      description: "Pão francês",
      dateTask: new Date(),
      time: "08:00",
      isCompleted: false,
    },
    {
      title: "Comprar leite",
      description: "Leite desnatado",
      dateTask: new Date(),
      time: "09:00",
      isCompleted: false,
    },
    {
      title: "Comprar café",
      description: "Café torrado",
      dateTask: new Date(),
      time: "09:30",
      isCompleted: false,
    },
    {
      title: "Comprar açúcar",
      description: "Açúcar cristal",
      dateTask: new Date(),
      time: "12:00",
      isCompleted: false,
    },
    {
      title: "Comprar manteiga",
      description: "Manteiga com sal",
      dateTask: new Date(),
      time: "13:00",
      isCompleted: false,
    },
    {
      title: "Comprar ovos",
      description: "Ovos brancos",
      dateTask: new Date(),
      time: "13:30",
      isCompleted: false,
    },
    {
      title: "Comprar ovos",
      description: "Ovos brancos",
      dateTask: new Date(),
      time: "13:30",
      isCompleted: false,
    },
    {
      title: "Comprar ovos",
      description: "Ovos brancos",
      dateTask: new Date(),
      time: "13:30",
      isCompleted: false,
    },
  ];

  return (
    <View className="flex-1 animate-fadeIn">
      <View className="flex items-center bg-purple-200 pt-16 p-5">
        <Calendar />
      </View>
      <View className="flex-1">
        <ScrollView className="flex flex-col w-full gap-3 px-5 py-8 bg-gray-50 rounded-2xl">
          {tasks.map((task, index) => (
            <TaskItem key={index} props={task} />
          ))}
        </ScrollView>
      </View>
        <AddTaskButton />
    </View>
  );
};

export default Home;
