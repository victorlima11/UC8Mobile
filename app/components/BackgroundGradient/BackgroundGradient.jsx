import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function BackgroundGradient({
  children,
  colors = ['#1565c0', '#64b5f6'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  style,
}) {
  return (
    <LinearGradient
      colors={colors}
      style={[{ flex: 1 }, style]}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
}