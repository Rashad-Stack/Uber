import CustomButtons from "@/components/CustomButtons";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Onboarding() {
  const swiperRef = React.useRef<Swiper>(null);
  const [activeState, setActiveState] = useState(0);

  const isLastSlide = activeState === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full justify-between items-center">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-[#e2e8f0]" />}
        onIndexChanged={(index) => setActiveState(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButtons
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mb-2"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(-1)
        }
      />
    </SafeAreaView>
  );
}
