import { icons } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButtons from "./CustomButtons";

export default function OAuth() {
  const handleGoogleSignIn = () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text>Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButtons
        title="Log In with Google"
        className="mt-5 w-full shadow-none flex items-center"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
