import { PlusIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const AddTaskButton = () => {
  return (
    <TouchableOpacity className="w-[60px] h-[60px] bg-purple-600 rounded-full flex items-center justify-center absolute bottom-36 right-4 z-50 shadow-lg">
      <PlusIcon size={30} color="white" />
    </TouchableOpacity>
  );
};

export default AddTaskButton;