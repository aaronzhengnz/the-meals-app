import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

const MealItem = ({ onMealSelected, meal }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={onMealSelected}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeaderRow }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetailsRow }}>
            <Text style={styles.mealText}>{meal.duration}m</Text>
            <Text style={styles.mealText}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.mealText}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeaderRow: {
    height: '85%',
  },
  mealDetailsRow: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  mealText: {
    fontFamily: 'Baloo2_400Regular',
  },
});

export default MealItem;
