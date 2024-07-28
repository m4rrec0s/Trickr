import { X } from "lucide-react-native"
import {
  View,
  Text,
  ModalProps,
  ScrollView,
  Modal as RNModal,
  TouchableOpacity,
} from "react-native"
import { BlurView } from "expo-blur"


type Props = ModalProps & {
  title: string
  subtitle?: string
  onClose?: () => void
}

export function Modal({
  title,
  subtitle = "",
  onClose,
  children,
  ...rest
}: Props) {
  return (
    <RNModal transparent animationType="slide" {...rest}>
      <BlurView
        className="flex-1"
        intensity={7}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <View className="flex-1 justify-end bg-gray-100/50">
          <View className="bg-white border-t border-gray-400 px-6 pt-5 pb-10 h-full">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="flex-row justify-between items-center pt-5">
                <Text className="text-black font-medium text-xl">{title}</Text>

                {onClose && (
                  <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
                    <X color={"#000000"} size={20} />
                  </TouchableOpacity>
                )}
              </View>

              {subtitle.trim().length > 0 && (
                <Text className="text-zinc-400 font-regular leading-6  my-2">
                  {subtitle}
                </Text>
              )}

              {children}
            </ScrollView>
          </View>
        </View>
      </BlurView>
    </RNModal>
  )
}
