import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackActions, CommonActions } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {
  const categoryId = route.params.id;

  const meals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  const renderMeal = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        onMealSelected={() => {
          navigation.navigate('MealDetails', itemData.item);
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        style={{ width: '100%', padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
