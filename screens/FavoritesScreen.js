import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/meal-data";
import MealItem from "../components/MealItem";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id),
  );

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#3f2f25",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
  },
  text: {
    color: "white",
  },
});
