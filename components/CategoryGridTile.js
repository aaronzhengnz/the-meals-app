import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CategoryGridTile = ({ item, onItemPressed }) => {
  return (
    <Pressable onPress={onItemPressed} style={styles.pressableItem}>
      <View
        style={{
          ...styles.container,
          backgroundColor: item.color,
        }}>
        <Text style={styles.text} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    flexShrink: 2,
    padding: 22,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  text: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
