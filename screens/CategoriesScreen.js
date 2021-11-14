import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderItems = (itemData) => (
    <CategoryGridTile
      item={itemData.item}
      onItemPressed={() => navigation.navigate('CategoryMeals', itemData.item)}
    />
  );

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItems} />;
};

export default CategoriesScreen;
