import { BookIcon } from "lucide-react-native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const LibraryPage = () => {
  return (
    <View className="flex-1 pt-20 px-5 animate-fadeIn">
      <View className="pb-8">
        <Text className="text-2xl font-semibold mb-1">Biblioteca</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="w-full gap-3"
      >
        <View className="w-full flex flex-row gap-3">
          <TouchableOpacity className="p-6 bg-blue-800 rounded-xl">
            <BookIcon size={24} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity className="p-6 bg-blue-800 rounded-xl">
            <BookIcon size={24} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity className="p-6 bg-blue-800 rounded-xl">
            <BookIcon size={24} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity className="p-6 bg-blue-800 rounded-xl">
            <BookIcon size={24} color={"#FFF"} />
          </TouchableOpacity>
        </View>
        
        {/* Add more TouchableOpacity components here */}

        <View></View>

      </ScrollView>
    </View>
  );
};

export default LibraryPage;
