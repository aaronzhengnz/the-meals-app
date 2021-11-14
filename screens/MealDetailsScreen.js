import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item as HeaderItem } from 'react-navigation-header-buttons';
import TheHeaderButton from '../components/TheHeaderButton';

const MealDetailsScreen = ({ route, navigation }) => {
  const meal = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={TheHeaderButton}>
            <HeaderItem
              title="Favourites"
              iconName="ios-star" />
          </HeaderButtons>
        )
      },
    });
  }, [navigation]);


  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Back to Categories"
        onPress={() => navigation.navigate('Categories')}
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

export default MealDetailsScreen;
