import AddTaskButton from "@/components/add-task-button";
import Calendar from "@/components/calendar";
import { Modal } from "@/components/modal";
import TaskItem from "@/components/task-item";
import { PlusIcon } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

enum MODAL {
  NONE = 0,
  TASK = 1,
}

const Home = () => {
  const [modalVisible, setModalVisible] = useState(MODAL.NONE);

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
      <ScrollView className="flex flex-col w-full gap-3 px-5 py-8 bg-gray-50 rounded-2xl">
        {tasks.map((task, index) => (
          <TaskItem key={index} props={task} />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => setModalVisible(MODAL.TASK)} className="w-[60px] h-[60px] bg-purple-600 rounded-full flex items-center justify-center absolute bottom-5 right-4 z-50 shadow-lg">
        <PlusIcon size={30} color="white" />
      </TouchableOpacity>

      <Modal
        title={"Cadastrar atividade"}
        subtitle="Todos os convidados podem vizualizar as atividades"
        onClose={() => setModalVisible(MODAL.NONE)}
        visible={modalVisible === MODAL.TASK}
      ></Modal>

    </View>
  );
};

export default Home;
