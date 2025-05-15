import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#18181B',
          borderTopColor: '#27272A',
        },
        tabBarInactiveTintColor: '#A1A1AA',
        headerStyle: {
          backgroundColor: '#32cd32',
        },
        headerTintColor: '#ffffff',
      }}
    >
      <Tabs.Screen
        name="nativos"
        options={{
          title: 'Nativos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'code' : 'code'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="personalizados"
        options={{
          title: 'Personalizados',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'logo-buffer' : 'logo-buffer'}
              color={color}
              size={24}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'globe' : 'globe'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
