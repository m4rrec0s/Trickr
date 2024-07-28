import { ReactNode } from "react"
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  Platform,
} from "react-native"
import clsx from "clsx"

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = ViewProps & {
  children: ReactNode
  variant?: Variants
}

function Input({
  children,
  variant = "primary",
  className,
  ...rest
}: InputProps) {
  return (
    <View
      className={clsx(
        "min-h-16 max-h-16 flex-row items-center gap-2",
        {
          "h-14 px-4 rounded-lg border border-zinc-700": variant !== "primary",
          "bg-gray-200": variant === "secondary",
          "bg-gray-300": variant === "tertiary",
        },
        className
      )}
      {...rest}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-zinc-900 text-lg font-regular"
      placeholderTextColor={"#71717a"}
      cursorColor={"#6b7280"}
      selectionColor={Platform.OS === "ios" ? "#6b7280" : undefined}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }