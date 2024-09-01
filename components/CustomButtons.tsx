import { ButtonProps } from "@/types/type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CustomButtons({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) {
  const getBgVariantStyles = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "outline":
        return "bg-transparent border border-neutral-300 border-[0.3px]";
      default:
        return "bg-[#0286ff]";
    }
  };

  const getTextVariantStyles = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
      case "primary":
        return "text-black";
      case "secondary":
        return "text-gray-100";
      case "danger":
        return "text-red-100";
      case "success":
        return "text-green-100";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full p-3 rounded-full flex flex-row justify-center shadow-md shadow-neutral-400/70 ${getBgVariantStyles(bgVariant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`text-lg font-bold ${getTextVariantStyles(textVariant)}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
