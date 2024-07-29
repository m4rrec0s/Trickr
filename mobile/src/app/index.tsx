import Calendar from "@/components/calendar";
import { Input } from "@/components/input";
import { Modal } from "@/components/modal";
import TaskItem from "@/components/task-item";
import { PlusIcon } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";

enum MODAL {
  NONE = 0,
  TASK = 1,
}

// Definindo a interface para uma tarefa
interface Task {
  title: string;
  description: string;
  time: string;
  isCompleted: boolean;
}

// Definindo o tipo para o objeto tasks
type Tasks = {
  [key: number]: Task[];
};

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(MODAL.NONE);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const tasks: Tasks = {
    0: [
      {
        title: "Comprar pão",
        description: "Pão francês",
        time: "08:00",
        isCompleted: false,
      },
      {
        title: "Comprar leite",
        description: "Leite desnatado",
        time: "09:00",
        isCompleted: false,
      },

      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
    ],
    1: [
      {
        title: "Comprar café",
        description: "Café torrado",
        time: "09:30",
        isCompleted: false,
      },
      {
        title: "Comprar café",
        description: "Café torrado",
        time: "09:30",
        isCompleted: false,
      },
      {
        title: "Comprar açúcar",
        description: "Açúcar cristal",
        time: "12:00",
        isCompleted: false,
      },
      {
        title: "Comprar manteiga",
        description: "Manteiga com sal",
        time: "13:00",
        isCompleted: false,
      },
      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
    ],
    2: [
      {
        title: "Comprar açúcar",
        description: "Açúcar cristal",
        time: "12:00",
        isCompleted: false,
      },
      {
        title: "Comprar açúcar",
        description: "Açúcar cristal",
        time: "12:00",
        isCompleted: false,
      },
      {
        title: "Comprar açúcar",
        description: "Açúcar cristal",
        time: "12:00",
        isCompleted: false,
      },
    ],
    3: [
      {
        title: "Comprar manteiga",
        description: "Manteiga com sal",
        time: "13:00",
        isCompleted: false,
      },
    ],
    4: [
      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
    ],
    5: [
      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
    ],
    6: [
      {
        title: "Comprar ovos",
        description: "Ovos brancos",
        time: "13:30",
        isCompleted: false,
      },
    ],
  };

  return (
    <View className="flex-1 animate-fadeIn">
      <View className="flex items-center bg-purple-200 pt-16 p-5">
        <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </View>
      <ScrollView className="flex flex-col w-full gap-3 px-5 py-8 bg-gray-50 rounded-2xl">
        {tasks[selectedDay]?.map((task, index) => (
          <TaskItem key={index} props={task} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => setModalVisible(MODAL.TASK)}
        className="w-[60px] h-[60px] bg-purple-600 rounded-full flex items-center justify-center absolute bottom-5 right-4 z-50 shadow-lg"
      >
        <PlusIcon size={30} color="white" />
      </TouchableOpacity>

      <Modal
        title={"Cadastrar atividade"}
        subtitle="Todos os convidados podem vizualizar as atividades"
        onClose={() => setModalVisible(MODAL.NONE)}
        visible={modalVisible === MODAL.TASK}
      >
        <View className="flex justify-between h-[84vh]">
          <View className="border-t border-gray-300 mt-4 pt-3 pb-2 gap-4">
            <Input variant="secondary" className="">
              <Input.Field placeholder="Título da atividade" />
            </Input>
            <Input variant="secondary" className="">
              <Input.Field placeholder="Dia" />
            </Input>
            <Input variant="secondary" className="">
              <Input.Field placeholder="Horário" />
            </Input>
            <Input variant="secondary" className="">
              <Input.Field placeholder="Tag" />
            </Input>
          </View>

          <TouchableOpacity
            onPress={() => setModalVisible(MODAL.NONE)}
            className="w-full bg-purple-600 rounded-lg py-3 mt-4"
          >
            <Text className="text-center text-white font-semibold">Salvar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
