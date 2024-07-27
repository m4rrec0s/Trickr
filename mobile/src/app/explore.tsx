import RoutineItem from "@/components/routine-item";
import React from "react";
import { View, Text, ScrollView } from "react-native";

type TagType = "Sugestão" | "Novo" | "Popular";

interface Routine {
  title: string;
  description: string;
  tag: TagType;
}

const ExplorePage: React.FC = () => {
  const routines: Routine[] = [
    {
      title: "Rotina de exercícios",
      description: "Rotina de exercícios para você fazer em casa.",
      tag: "Sugestão",
    },
    {
      title: "Rotina de estudos",
      description: "Rotina de estudos para você se preparar para o ENEM.",
      tag: "Popular",
    },
    {
      title: "Rotina de alimentação",
      description: "Rotina de alimentação para você se alimentar melhor.",
      tag: "Novo",
    },
    {
      title: "Rotina de leitura",
      description: "Rotina de leitura para você ler mais livros.",
      tag: "Sugestão",
    },
    {
      title: "Rotina de sono",
      description: "Rotina de sono para você dormir melhor.",
      tag: "Novo",
    },
    {
      title: "Rotina de trabalho",
      description: "Rotina de trabalho para você ser mais produtivo.",
      tag: "Novo",
    },
    {
      title: "Rotina de exercícios",
      description: "Rotina de exercícios para você fazer em casa.",
      tag: "Sugestão",
    },
    {
      title: "Rotina de estudos",
      description: "Rotina de estudos para você se preparar para o ENEM.",
      tag: "Novo",
    },
    {
      title: "Rotina de alimentação",
      description: "Rotina de alimentação para você se alimentar melhor.",
      tag: "Popular",
    },
    {
      title: "Rotina de leitura",
      description: "Rotina de leitura para você ler mais livros.",
      tag: "Novo",
    },
    {
      title: "Rotina de sono",
      description: "Rotina de sono para você dormir melhor.",
      tag: "Popular",
    },
  ];

  return (
    <View className="flex-1 pt-20 px-5 animate-fadeIn">
      <View className="pb-8">
        <Text className="text-2xl font-semibold mb-1">Planos de rotina</Text>
        <Text className="text-base text-gray-500 w-[80%] leading-none">
          Um lugar para descobrir as melhores rotinas para você.
        </Text>
      </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="w-full gap-3"
        >
          <View className="flex flex-wrap flex-row justify-between">
            {routines.map((routine, index) => (
              <View key={index} className="w-[48%] mb-3">
                <RoutineItem
                  title={routine.title}
                  color="bg-purple-200"
                  tag={routine.tag}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
  );
};

export default ExplorePage;
