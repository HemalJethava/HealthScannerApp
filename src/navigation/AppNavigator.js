import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '../theme';

import HomeScreen from '../screens/HomeScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import IngredientOcrScreen from '../screens/IngredientOcrScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HealthProfileScreen from '../screens/HealthProfileScreen';
import ResultScreen from '../screens/ResultScreen';

// ── Shared header style ──────────────────────────────────────────────────────
const headerOpts = {
  headerStyle: {backgroundColor: colors.primary},
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {fontWeight: '700', fontSize: 17},
  contentStyle: {backgroundColor: colors.background},
};

// ── Tab icon map ─────────────────────────────────────────────────────────────
const TAB_ICONS = {
  Home:           {active: 'home',              inactive: 'home-outline'},
  BarcodeScanner: {active: 'barcode',           inactive: 'barcode-outline'},
  IngredientOcr:  {active: 'camera',            inactive: 'camera-outline'},
  History:        {active: 'time',              inactive: 'time-outline'},
};

// ── Bottom Tab Navigator ─────────────────────────────────────────────────────
const Tab = createBottomTabNavigator();

function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...headerOpts,
        tabBarIcon: ({focused, color, size}) => {
          const map = TAB_ICONS[route.name];
          const iconName = focused ? map.active : map.inactive;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          // Base height + device bottom inset so gesture bar never overlaps
          height: 56 + insets.bottom,
          paddingBottom: insets.bottom + 4,
          paddingTop: 6,
        },
        tabBarLabelStyle: {fontSize: 11, fontWeight: '600'},
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home', tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="BarcodeScanner"
        component={BarcodeScannerScreen}
        options={{title: 'Barcode Scanner', tabBarLabel: 'Barcode'}}
      />
      <Tab.Screen
        name="IngredientOcr"
        component={IngredientOcrScreen}
        options={{title: 'Ingredient OCR', tabBarLabel: 'OCR'}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{title: 'History', tabBarLabel: 'History'}}
      />
    </Tab.Navigator>
  );
}

// ── Root Stack ───────────────────────────────────────────────────────────────
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOpts}>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HealthProfile"
          component={HealthProfileScreen}
          options={{title: 'Health Profile'}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{title: 'Scan Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
