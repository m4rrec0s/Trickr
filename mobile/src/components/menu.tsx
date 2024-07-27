import { View, Text } from "react-native";
import {
  CircleCheckBigIcon,
  CompassIcon,
  LibraryBigIcon,
  UserRoundIcon,
} from "lucide-react-native";
import { Link } from "expo-router";

const Menu = () => {
  return (
    <View className="w-full flex flex-row justify-between bg-white px-10 pt-4 pb-6 rounded-l-2xl rounded-r-2xl z-50 shadow-2xl border-t border-gray-200">
      <Link className="p-4" href="/">
        <View className="flex flex-col items-center justify-center">
          <CircleCheckBigIcon size={30} color={"black"} />
          <Text className="text-sm font-semibold">Rotina</Text>
        </View>
      </Link>

      <Link className="p-4" href="/explore">
        <View className="flex flex-col items-center justify-center">
          <CompassIcon size={30} color={"black"} />
          <Text className="text-sm font-semibold">Descubra</Text>
        </View>
      </Link>

      <Link className="p-4" href="/library">
        <View className="flex flex-col items-center justify-center">
          <LibraryBigIcon size={30} color={"black"} />
          <Text className="text-sm font-semibold">Biblioteca</Text>
        </View>
      </Link>

      <Link className="p-4" href="/profile">
        <View className="flex flex-col items-center justify-center">
          <UserRoundIcon size={30} color={"black"} />
          <Text className="text-sm font-semibold">Perfil</Text>
        </View>
      </Link>
    </View>
  );
};

export default Menu;