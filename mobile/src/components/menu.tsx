import { TouchableOpacity, View, Text } from "react-native";
import {
  CircleCheckBigIcon,
  CompassIcon,
  LibraryBigIcon,
  UserRoundIcon,
} from "lucide-react-native";

const Menu = () => {
  return (
    <View className="absolute -bottom-2 w-full flex flex-row shadow-2xl border border-gray-200 justify-between bg-white px-10 pt-4 pb-10 rounded-l-2xl rounded-r-2xl z-50">
      
      <TouchableOpacity className="p-2 rounded-full flex items-center">
        <CircleCheckBigIcon size={30} color={"black"} />
        <Text className="text-sm font-semibold">Rotina</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-2 rounded-full flex items-center">
        <CompassIcon size={30} color={"black"} />
        <Text className="text-sm font-semibold">Descubra</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-2 rounded-full flex items-center">
        <LibraryBigIcon size={30} color={"black"} />
        <Text className="text-sm font-semibold">Biblioteca</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-2 rounded-full flex items-center">
        <UserRoundIcon size={30} color={"black"} />
        <Text className="text-sm font-semibold">Perfil</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Menu;
