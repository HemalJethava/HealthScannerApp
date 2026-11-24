import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors, radius} from '../theme';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Health Scanner</Text>
        <Text style={styles.subtitle}>Scan products. Know what you eat.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeading}>Get started</Text>
        <Text style={styles.cardBody}>
          Use the tabs below to scan a barcode, photograph an ingredient label,
          or review your scan history.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HealthProfile')}
          activeOpacity={0.75}>
          <Ionicons name="person-circle-outline" size={18} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Set Up Health Profile</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('BarcodeScanner')}
          activeOpacity={0.75}>
          <Ionicons name="barcode-outline" size={18} color={colors.primary} style={styles.buttonIcon} />
          <Text style={[styles.buttonText, styles.buttonTextOutline]}>Scan a Barcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {alignItems: 'center', marginBottom: 32},
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },
  subtitle: {marginTop: 6, fontSize: 14, color: colors.textSecondary},
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.button,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  buttonIcon: {marginRight: 8},
  buttonText: {color: '#FFFFFF', fontSize: 15, fontWeight: '600'},
  buttonTextOutline: {color: colors.primary},
});
