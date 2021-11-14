import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from './constants/colors';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          // the common / shared header style is here
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTitleStyle: styles.headerTitleStyle,
          headerTintColor:
            Platform.OS === 'android' ? Colors.tintColor : Colors.primaryColor,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Meal Categories',
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color,
            },
          })}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{
            title: 'Meal Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 25,
  },
});
