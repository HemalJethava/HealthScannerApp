import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors, radius} from '../theme';

export default function IngredientOcrScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="camera-outline" size={48} color={colors.primary} style={styles.icon} />
        <Text style={styles.title}>Ingredient OCR</Text>
        <Text style={styles.body}>
          Photo capture and on-device text extraction will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center'},
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 28,
    alignItems: 'center',
    elevation: 2,
  },
  icon: {marginBottom: 12},
  title: {fontSize: 20, fontWeight: '700', color: colors.textPrimary, marginBottom: 8},
  body: {fontSize: 14, color: colors.textSecondary, textAlign: 'center', lineHeight: 20},
});
