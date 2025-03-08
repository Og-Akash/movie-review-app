import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="flex-1 justify-center items-center"
    >
      <Text className="text-4xl text-accent font-bold">Movie App 🌟🌟</Text>
      <Link href="/onboarding" className="mt-8">Onboarding</Link>
      <Link href="/movies/[id]">Details</Link>
    </View>
  );
}
