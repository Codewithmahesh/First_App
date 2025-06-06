import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, Text, View } from "react-native";

export default function index() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.screen}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Left: Avatar + Greeting */}
        <View style={styles.leftSection}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/d7/a7/61/d7a761f988ccb4131ddc15a19844bc52.jpg",
            }}
            style={styles.image}
          />
        </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hello, Sandra</Text>
            <Text style={styles.dateText}>Today 06 Oct</Text>
          </View>

        {/* Right: Search Icon */}
        <View style={styles.searchIcon}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 35,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  greeting: {
    alignItems: "center",
  },
  greetingText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  dateText: {
    fontFamily: "Montserrat_400Regular",
    color: "#555",
    fontSize: 14,
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
