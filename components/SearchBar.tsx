import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

interface SearchProps {
  placeHolder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeHolder }: SearchProps) => {
  return (
    <View className="flex-row items-center p-4 rounded-full bg-[#bcb9df]">
      <Image
        source={icons.search}
        className="size-8"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
