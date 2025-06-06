import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    useFonts,
} from "@expo-google-fonts/montserrat";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";


const trustedDishes = [
  {
    id: "1",
    name: "Dal Makhani",
    time: "30 mins",
    rating: "4.5",
    price: "₹180",
    image:
      "https://i.pinimg.com/736x/3e/9a/cf/3e9acfd09716db0ce96995706faa7437.jpg",
  },
  {
    id: "2",
    name: "Paneer Tikka",
    time: "25 mins",
    rating: "4.7",
    price: "₹220",
    image:
      "https://i.pinimg.com/736x/1d/e8/32/1de832e65ce9d7905be9f4b389dd87c4.jpg",
  },
];

const recommendedDishes = [
  {
    id: "1",
    name: "Dal Makhani",
    time: "30 mins",
    rating: "4.5",
    price: "₹180",
    image:
      "https://i.pinimg.com/736x/3e/9a/cf/3e9acfd09716db0ce96995706faa7437.jpg",
    best: true,
  },
  {
    id: "2",
    name: "Chole Bhature",
    time: "25 mins",
    rating: "4.3",
    price: "₹160",
    image:
      "https://i.pinimg.com/736x/e1/92/64/e19264252d1f8b03e6aa9a768b7f27da.jpg",
    best: false,
  },
   {
    id: "3",
    name: "Rajma Chawal",
    time: "35 mins",
    rating: "4.9",
    price: "₹120",
    image:
      "https://i.pinimg.com/736x/d3/df/ac/d3dfac7c89ca46033a8e83b64649cd65.jpg",
    best: true,
  },
];

export default function Search() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <AntDesign name="search1" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search delicious food..."
          placeholderTextColor="#aaa"
        />
        <Ionicons
          name="mic-outline"
          size={22}
          color="#333"
          style={styles.mic}
        />
      </View>

      {/* Trusted Picks */}
      <View style={styles.picksContainer}>
        <View style={styles.picksHeader}>
          <Text style={styles.picksTitle}>Your trusted picks</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          data={trustedDishes}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.foodCard}>
              <View style={styles.rating}>
                <Fontisto name="star" size={16} color="#f5a623" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <View style={styles.info}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.rowBetween}>
                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={16} color="#777" />
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <AntDesign name="plus" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Recommended Section */}
      <View style={styles.Recommended}>
        <Text style={styles.recommendedTitle}>Recommended</Text>
        {recommendedDishes.map((item) => (
          <View key={item.id} style={styles.recCard}>
            <Image source={{ uri: item.image }} style={styles.recImage} />
            <View style={styles.recInfo}>
              <View style={styles.recHeader}>
                <Text style={styles.recTitle}>{item.name}</Text>
                {item.best && (
                  <View style={styles.bestTag}>
                    <Text style={styles.bestText}>Best Seller</Text>
                  </View>
                )}
              </View>

              <View style={styles.recMeta}>
                <Ionicons name="time-outline" size={14} color="#777" />
                <Text style={styles.recTime}>{item.time}</Text>
                <Ionicons name="star" size={14} color="#f5a623" style={{ marginLeft: 10 }} />
                <Text style={styles.recRating}>{item.rating}</Text>
              </View>

              <View style={styles.recFooter}>
                <Text style={styles.recPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.recAddBtn}>
                    <Text style={{ color: "white", fontFamily: "Montserrat_600SemiBold", fontSize: 14, marginRight: 5 }}>
                        Add
                    </Text>
                  <AntDesign name="plus" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },
  searchBox: {
    flexDirection: "row",
    width: "90%",
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#ddd",
    borderWidth: 1.5,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#333",
  },
  mic: {
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
  },
  picksContainer: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  picksHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  picksTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#999",
    fontFamily: "Montserrat_400Regular",
  },
  row: {
    justifyContent: "space-between",
  },
  foodCard: {
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#eee",
  },
  foodImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  info: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: "#222",
    flex: 1,
  },
  price: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: "#1f1f1f",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#777",
    fontFamily: "Montserrat_400Regular",
  },
  addButton: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 20,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 8,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: "#333",
  },

  Recommended: {
    marginTop: 10,
    width: "90%",
  },
  recommendedTitle: {
    fontSize: 20,
    color: "#333",
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 10,
  },
  recCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderColor: "#eee",
    borderWidth: 1,
  },
  recImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  recHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#222",
    flex: 1,
  },
  bestTag: {
    backgroundColor: "#f5a623",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  bestText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Montserrat_600SemiBold",
  },
  recMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  recTime: {
    marginLeft: 5,
    fontSize: 12,
    color: "#777",
    fontFamily: "Montserrat_400Regular",
  },
  recRating: {
    marginLeft: 5,
    fontSize: 12,
    color: "#333",
    fontFamily: "Montserrat_400Regular",
  },
  recFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between",
  },
  recPrice: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#333",
  },
  recAddBtn: {
    backgroundColor: "#000",
    width: 70,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    shadowColor: "#000",
  },
});
