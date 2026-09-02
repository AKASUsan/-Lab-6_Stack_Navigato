import { Text, View } from "react-native";

export default function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black", fontSize: 16 }}>
        This is OrderScreen!
      </Text>
      <Text style={{ color: "blue", fontWeight: "bold", textDecorationLine: "underline" }}>
       Kanthachart Kopimai ID:  6714110029
      </Text>
    </View>
  );
}