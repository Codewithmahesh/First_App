import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";



export default function TabLayout() {
  return (
  
     <Tabs
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: {
      backgroundColor: "black",
      position: "absolute",
      left: 30,
      right: 30,
      marginVertical: 10,
      marginHorizontal: 10,
      bottom: 10,
      paddingTop: 5,
      borderRadius: 30,
      borderTopWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      },
     }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
           <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
          <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Second"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
          <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => (
          <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
